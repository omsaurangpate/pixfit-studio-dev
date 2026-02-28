import { SignedIn, SignedOut } from "@clerk/nextjs";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Pricing from "@/components/hero/pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <Header />
      <SignedIn>
        <div className="h-screen w-full flex justify-center items-center">
          <h1 className="text-2xl font-semibold">Hello! You&apos;re inside the SaaS 🎉</h1>
        </div>
      </SignedIn>
      <SignedOut>
        <Hero />
        <Pricing />
      </SignedOut>
    </main>
  );
}