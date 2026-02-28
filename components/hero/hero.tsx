"use client"

import { SignInButton } from "@clerk/nextjs"
import { Upload, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import BeforeImage from "@/public/images/before.jpg"
import AfterImage from "@/public/images/after.png"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-15 pb-20 overflow-hidden bg-[#F7F6F2]">

            {/* Radial glow */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(91,79,232,0.10)_0%,transparent_70%)]" />

            {/* Headline */}
            <h1 className="text-[clamp(3rem,7vw,6rem)] leading-[1.05] tracking-[-0.03em] text-[#111110] max-w-[820px] mb-4 font-serif">
                Marketplace-ready product photos,{" "}
                <span className="text-[#5B4FE8] italic">in seconds.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed mb-8">
                Remove backgrounds, apply perfect white fills, and process 100+ images at once — all without touching a single slider.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
                <SignInButton mode="modal">
                    <Button size="lg" className="rounded-full gap-2 px-7">
                        <Upload size={16} />
                        Upload Images — It&apos;s Free
                    </Button>
                </SignInButton>
                <Button size="lg" variant="outline" className="rounded-full gap-2 px-7">
                    Watch Demo <ArrowRight size={15} />
                </Button>
            </div>

            {/* Demo Card */}
            {/* Demo Card */}
            <div className="w-full max-w-3xl mb-16">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl">

                    {/* Window chrome */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                        <span className="ml-2 text-xs text-gray-400">PixFit Studio — Processing</span>
                    </div>

                    {/* Before / After */}
                    <div className="relative grid grid-cols-2 min-h-[260px]">

                        {/* Before */}
                        <div className="flex flex-col items-center justify-center gap-4 p-8 bg-gray-50 border-r border-gray-200">
                            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Before</span>
                            <div className="w-48 h-48 rounded-xl overflow-hidden">
                                <Image
                                    src={BeforeImage}
                                    alt="Product before background removal"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xs text-gray-400">cluttered background</span>
                        </div>

                        {/* Arrow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#111110] text-white flex items-center justify-center text-sm shadow-lg">
                            →
                        </div>

                        {/* After */}
                        <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white">
                            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">After</span>
                            <div className="w-48 h-48 rounded-xl overflow-hidden border border-gray-100 shadow-md">
                                <Image
                                    src={AfterImage}
                                    alt="Product after background removal"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xs text-gray-400">pure white background</span>
                        </div>
                    </div>

                    {/* Progress */}
                    <div className="px-6 py-4 border-t border-gray-100 flex items-center gap-4">
                        <span className="text-xs text-gray-400 whitespace-nowrap">Processing 47 images...</span>
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#5B4FE8] rounded-full w-[68%]" />
                        </div>
                        <span className="text-xs text-[#5B4FE8] font-semibold whitespace-nowrap">68%</span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
                {[
                    { num: "12M+", label: "Images Processed" },
                    { num: "4.9★", label: "Average Rating" },
                    { num: "99.4%", label: "Accuracy Rate" },
                    { num: "~2s", label: "Per Image" },
                ].map((s) => (
                    <div key={s.label} className="flex flex-col items-center gap-1">
                        <span className="text-3xl font-bold text-[#111110]">{s.num}</span>
                        <span className="text-sm text-gray-400">{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

// "use client"

// import { SignInButton } from "@clerk/nextjs"
// import { Upload, ArrowRight, Star, Zap, Shield, Users } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Image from "next/image"
// import BeforeImage from "@/public/images/before.jpg"
// import AfterImage from "@/public/images/after.png"

// export default function Hero() {
//     return (
//         <section className="relative min-h-screen bg-[#F7F6F2] overflow-hidden">

//             {/* ── Background decorations ── */}
//             <div className="pointer-events-none absolute inset-0">
//                 {/* Top-right glow */}
//                 <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(91,79,232,0.08)_0%,transparent_70%)]" />
//                 {/* Bottom-left glow */}
//                 <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(91,79,232,0.05)_0%,transparent_70%)]" />
//                 {/* Dot grid */}
//                 <div
//                     className="absolute inset-0 opacity-[0.035]"
//                     style={{
//                         backgroundImage: "radial-gradient(circle, #5B4FE8 1px, transparent 1px)",
//                         backgroundSize: "32px 32px",
//                     }}
//                 />
//             </div>

//             {/* ── Main layout: left text + right visual ── */}
//             <div className="relative max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-28 w-full">

//                     {/* ── LEFT: Copy ── */}
//                     <div className="flex flex-col items-start text-left">

//                         {/* Badge */}
//                         <div className="flex items-center gap-2 mb-6 bg-white border border-[#5B4FE8]/15 rounded-full px-4 py-2 shadow-sm">
//                             <span className="w-2 h-2 rounded-full bg-[#5B4FE8] animate-pulse" />
//                             <span className="text-xs font-semibold text-[#5B4FE8] tracking-widest uppercase">
//                                 AI-Powered Background Removal
//                             </span>
//                         </div>

//                         {/* Headline */}
//                         <h1 className="font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[1.05] tracking-[-0.03em] text-[#111110] mb-6">
//                             Your products.<br />
//                             <span className="text-[#5B4FE8] italic">Marketplace-ready</span><br />
//                             in seconds.
//                         </h1>

//                         {/* Subtitle */}
//                         <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
//                             Remove messy backgrounds, apply studio-quality white fills, and process
//                             100+ images in one click. No Photoshop. No designer needed.
//                         </p>

//                         {/* Feature pills */}
//                         <div className="flex flex-wrap gap-2 mb-10">
//                             {[
//                                 { icon: Zap, text: "2s per image" },
//                                 { icon: Shield, text: "99.4% accuracy" },
//                                 { icon: Users, text: "12M+ images processed" },
//                             ].map(({ icon: Icon, text }) => (
//                                 <div key={text} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm">
//                                     <Icon size={12} className="text-[#5B4FE8]" />
//                                     {text}
//                                 </div>
//                             ))}
//                         </div>

//                         {/* CTAs */}
//                         <div className="flex flex-wrap gap-3 mb-10">
//                             <SignInButton mode="modal">
//                                 <Button
//                                     size="lg"
//                                     className="rounded-full gap-2 px-8 bg-[#111110] hover:bg-[#5B4FE8] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(91,79,232,0.35)] text-white"
//                                 >
//                                     <Upload size={16} strokeWidth={2.5} />
//                                     Start Free — No Credit Card
//                                 </Button>
//                             </SignInButton>
//                             <Button
//                                 size="lg"
//                                 variant="outline"
//                                 className="rounded-full gap-2 px-7 hover:-translate-y-0.5 transition-all duration-200 border-gray-300 hover:border-[#5B4FE8] hover:text-[#5B4FE8]"
//                             >
//                                 Watch Demo <ArrowRight size={15} />
//                             </Button>
//                         </div>

//                         {/* Social proof */}
//                         <div className="flex items-center gap-4">
//                             {/* Avatar stack */}
//                             <div className="flex -space-x-2">
//                                 {["bg-violet-400", "bg-indigo-400", "bg-purple-500", "bg-blue-400"].map((bg, i) => (
//                                     <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
//                                         {["A", "B", "C", "D"][i]}
//                                     </div>
//                                 ))}
//                             </div>
//                             <div>
//                                 <div className="flex items-center gap-1">
//                                     {[...Array(5)].map((_, i) => (
//                                         <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
//                                     ))}
//                                     <span className="text-sm font-semibold text-[#111110] ml-1">4.9</span>
//                                 </div>
//                                 <p className="text-xs text-gray-400">from 2,400+ sellers</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ── RIGHT: Visual ── */}
//                     <div className="relative flex items-center justify-center lg:justify-end">

//                         {/* Main demo card */}
//                         <div className="relative w-full max-w-[520px]">
//                             <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden">

//                                 {/* Window chrome */}
//                                 <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
//                                     <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
//                                     <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
//                                     <span className="w-3 h-3 rounded-full bg-[#28C840]" />
//                                     <span className="ml-3 text-xs text-gray-400 font-medium">PixFit Studio — Processing</span>
//                                     <div className="ml-auto flex items-center gap-1.5 bg-[#5B4FE8]/10 rounded-full px-2.5 py-1">
//                                         <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FE8] animate-pulse" />
//                                         <span className="text-[10px] font-semibold text-[#5B4FE8]">LIVE</span>
//                                     </div>
//                                 </div>

//                                 {/* Before / After images */}
//                                 <div className="relative grid grid-cols-2">

//                                     {/* Before */}
//                                     <div className="relative flex flex-col items-center gap-3 p-5 bg-gray-50 border-r border-gray-100">
//                                         <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Before</span>
//                                         <div className="w-full aspect-square rounded-xl overflow-hidden">
//                                             <Image
//                                                 src={BeforeImage}
//                                                 alt="Before background removal"
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                         {/* Messy label */}
//                                         <div className="flex items-center gap-1 bg-red-50 border border-red-100 rounded-full px-2.5 py-1">
//                                             <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
//                                             <span className="text-[10px] text-red-500 font-medium">Cluttered background</span>
//                                         </div>
//                                     </div>

//                                     {/* Arrow badge */}
//                                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#111110] text-white flex items-center justify-center shadow-lg text-base">
//                                         →
//                                     </div>

//                                     {/* After */}
//                                     <div className="relative flex flex-col items-center gap-3 p-5 bg-white">
//                                         <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">After</span>
//                                         <div className="w-full aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm">
//                                             <Image
//                                                 src={AfterImage}
//                                                 alt="After background removal"
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                         {/* Clean label */}
//                                         <div className="flex items-center gap-1 bg-green-50 border border-green-100 rounded-full px-2.5 py-1">
//                                             <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
//                                             <span className="text-[10px] text-green-600 font-medium">Pure white background</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Progress bar */}
//                                 <div className="px-5 py-4 border-t border-gray-100 bg-white">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <span className="text-xs text-gray-400">Batch processing 47 images...</span>
//                                         <span className="text-xs font-semibold text-[#5B4FE8]">68%</span>
//                                     </div>
//                                     <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
//                                         <div className="h-full bg-gradient-to-r from-[#8B7CF6] to-[#5B4FE8] rounded-full w-[68%]" />
//                                     </div>
//                                     <div className="flex items-center justify-between mt-2">
//                                         <span className="text-[10px] text-gray-300">32 done · 15 remaining</span>
//                                         <span className="text-[10px] text-gray-300">~18s left</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* ── Floating callout: top-left ── */}
//                             <div className="absolute -top-5 -left-6 bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3">
//                                 <div className="w-9 h-9 rounded-xl bg-[#EAE8FF] flex items-center justify-center flex-shrink-0">
//                                     <Zap size={16} className="text-[#5B4FE8]" />
//                                 </div>
//                                 <div>
//                                     <p className="text-xs font-semibold text-[#111110]">Ultra Fast</p>
//                                     <p className="text-[10px] text-gray-400">2 seconds / image</p>
//                                 </div>
//                             </div>

//                             {/* ── Floating callout: bottom-right ── */}
//                             <div className="absolute -bottom-5 -right-6 bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3">
//                                 <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
//                                     <Shield size={16} className="text-green-500" />
//                                 </div>
//                                 <div>
//                                     <p className="text-xs font-semibold text-[#111110]">99.4% Accuracy</p>
//                                     <p className="text-[10px] text-gray-400">Studio-grade quality</p>
//                                 </div>
//                             </div>

//                             {/* ── Floating callout: right-center ── */}
//                             <div className="absolute top-1/2 -translate-y-1/2 -right-10 hidden xl:flex bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-3 py-2.5 flex-col items-center gap-1">
//                                 <div className="flex -space-x-1 mb-0.5">
//                                     {["bg-violet-400", "bg-indigo-400", "bg-purple-500"].map((bg, i) => (
//                                         <div key={i} className={`w-5 h-5 rounded-full ${bg} border border-white`} />
//                                     ))}
//                                 </div>
//                                 <p className="text-[10px] font-semibold text-[#111110] whitespace-nowrap">12M+ images</p>
//                                 <p className="text-[9px] text-gray-400">processed</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* ── Bottom trusted-by bar ── */}
//             <div className="relative border-t border-gray-200 bg-white/60 backdrop-blur-sm">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-wrap items-center justify-between gap-4">
//                     <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Trusted by sellers on</p>
//                     <div className="flex flex-wrap items-center gap-8">
//                         {["Amazon", "Shopify", "Etsy", "eBay", "Walmart"].map((brand) => (
//                             <span key={brand} className="text-sm font-semibold text-gray-300 hover:text-gray-500 transition-colors cursor-default">
//                                 {brand}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }