"use client"

import React from "react";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import BrandLogo from "@/public/images/brand-logo.png"
import Image from "next/image";

// Define props to allow extending the header (e.g., adding extra classes via parent)
interface HeaderProps extends React.HTMLAttributes<HTMLElement> { }

const Header = ({ className, ...props }: HeaderProps) => {
    return (
        <header className="bg-white/10 backdrop-blur-md dark:bg-slate-900/10 px-6 py-3 mx-2 rounded-lg flex items-center justify-between sticky top-2 z-10 transition-all duration-300">
            <div className="flex items-center gap-2">
                <div className="">
                    {/* <Layers className="w-5 h-5" /> */}
                    <Image
                        src={BrandLogo}
                        alt="Company Logo"
                        width={200}
                        priority
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button>Sign In</Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </header>
    )
}

export default Header;
