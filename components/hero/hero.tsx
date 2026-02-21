"use client"

import { SignInButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { Wand2, UploadIcon, Zap } from "lucide-react"

const Hero = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Wand2 className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent pb-1">
                Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800">Marketplace Ready</span> Product Photos Instantly.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
                Stop spending hours in Photoshop. PixFit Studio transforms your raw photos into marketplace-ready images in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
                <SignInButton mode="modal">
                    <Button>
                        <UploadIcon className="group-hover:-translate-y-1 transition-transform" />Upload Your Images {"(It's Free)"}
                    </Button>
                </SignInButton>
                <Button variant="outline"><Zap className="text-orange-500" />See How It Works</Button>
            </div>
        </div>
    )
}

export default Hero
