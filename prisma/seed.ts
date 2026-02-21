import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { UserRole, OrderStatus, ImageStatus, PaymentStatus, CreditTransactionType } from "../app/generated/prisma/client";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
  adapter,
});

// Define your seed data using Prisma's generated types
const userData: Prisma.UserCreateInput[] = [
  {
    clerkUserId: "clerk_user_001",
    email: "alex@example.com",
    name: "Alex Rivera",
    role: UserRole.USER,
    creditBalance: 100,
    // Nested writes for payments and transactions
    payments: {
      create: [
        {
          razorpayOrderId: "order_998877",
          amountInPaise: 9900,
          status: PaymentStatus.SUCCESS,
        }
      ]
    },
    orders: {
      create: [
        {
          status: OrderStatus.COMPLETED,
          totalCredits: 10,
          images: {
            create: [
              {
                originalUrl: "https://example.com/img1.jpg",
                creditsUsed: 10,
                status: ImageStatus.COMPLETED
              }
            ]
          }
        }
      ]
    }
  },
  {
    clerkUserId: "clerk_user_admin_01",
    email: "admin@system.com",
    name: "Admin User",
    role: UserRole.ADMIN,
    creditBalance: 5000,
  }
];

const packageData: Prisma.CreditPackageCreateInput[] = [
  { name: "Starter", credits: 100, priceInPaise: 9900 },
  { name: "Pro", credits: 500, priceInPaise: 39900 },
];

export async function main() {
  console.log("🚀 Starting seed...");

  // 1. Clear existing data to avoid unique constraint errors
  // Delete in order of dependency (Images first, then Orders, etc.)
  await prisma.image.deleteMany();
  await prisma.order.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.creditTransaction.deleteMany();
  await prisma.creditPackage.deleteMany();
  await prisma.user.deleteMany();

  // 2. Seed Credit Packages
  for (const pkg of packageData) {
    await prisma.creditPackage.create({ data: pkg });
  }

  // 3. Seed Users (with their nested Orders/Payments)
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  console.log("✅ Seed finished successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });