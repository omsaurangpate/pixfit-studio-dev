import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ImageUpscale, Images, Crop, ScissorsIcon } from "lucide-react";
import { FeatureCard } from "@/components/features-card";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-full">
        <SignedIn>
          <div className="h-[100vh] w-[100%] flex justify-center items-center">
            <h1>Hello There Your Inside the SaaS yaaaay</h1>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="flex flex-col items-center justify-center text-center">
            {/* Hero Section */}
            <Hero />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left w-full max-w-4xl">
              <FeatureCard
                title="Background Removal"
                description="Studio-quality cutouts powered by AI."
                icon={<ScissorsIcon className="h-6 w-6" />}
                variant="purple"
              />
              <FeatureCard
                title="Smart Resizing"
                description="Auto-scale to 1:1 ratio with perfect padding."
                icon={<ImageUpscale className="h-6 w-6" />}
                variant="purple"
              />
              <FeatureCard
                title="Bulk Processing"
                description="Edit 20+ images at once. Download as ZIP."
                icon={<Images className="h-6 w-6" />}
                variant="purple"
              />
            </div>
          </div>
        </SignedOut>
      </div>
    </main>
  );
}
