"use client"

import { useState } from "react"
import { SignInButton } from "@clerk/nextjs"
import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const plans = [
    {
        badge: "Starter",
        name: "Free",
        desc: "Perfect to explore and test the quality of our AI before committing.",
        monthly: 0,
        annual: 0,
        period: "forever",
        features: [
            { text: "30 images / month", included: true },
            { text: "Background removal", included: true },
            { text: "White background fill", included: true },
            { text: "Standard resolution output", included: true },
            { text: "Download individually", included: true },
            { text: "Bulk ZIP download", included: false },
            { text: "API access", included: false },
        ],
        cta: "Get Started Free",
        featured: false,
    },
    {
        badge: "Professional",
        name: "Pro",
        desc: "For serious sellers processing hundreds of product photos every month.",
        monthly: 29,
        annual: 23,
        period: "month",
        popular: true,
        features: [
            { text: "2,000 images / month", included: true },
            { text: "Background removal", included: true },
            { text: "White background fill", included: true },
            { text: "4K resolution output", included: true },
            { text: "Bulk ZIP download", included: true },
            { text: "Custom padding & margins", included: true },
            { text: "Priority processing", included: true },
        ],
        cta: "Start Pro Trial →",
        featured: true,
    },
    {
        badge: "Enterprise",
        name: "Scale",
        desc: "For agencies and brands processing thousands of images at volume.",
        monthly: 99,
        annual: 79,
        period: "month",
        features: [
            { text: "Unlimited images", included: true },
            { text: "Everything in Pro", included: true },
            { text: "Full REST API access", included: true },
            { text: "Dedicated support", included: true },
            { text: "Custom AI fine-tuning", included: true },
            { text: "SLA guarantee", included: true },
            { text: "Team seats (up to 10)", included: true },
        ],
        cta: "Contact Sales",
        featured: false,
    },
]

export default function Pricing() {
    const [annual, setAnnual] = useState(false)

    return (
        <section className="bg-[#111110] py-24 px-6" id="pricing">
            <div className="max-w-[1100px] mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[0.75rem] uppercase tracking-[0.12em] text-white/40 font-semibold block mb-4">
                        Pricing
                    </span>
                    <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] tracking-[-0.03em] leading-[1.1] text-white mb-4">
                        Simple, honest pricing.
                    </h2>
                    <p className="text-white/45 font-light max-w-[420px] mx-auto leading-relaxed">
                        Start free. Scale when you&apos;re ready. No surprise fees, ever.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex bg-white/[0.06] border border-white/10 rounded-full p-1 mt-8">
                        <button
                            onClick={() => setAnnual(false)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm transition-all duration-200 font-medium",
                                !annual ? "bg-white text-[#111110]" : "text-white/50 hover:text-white/80"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm transition-all duration-200 font-medium flex items-center gap-1.5",
                                annual ? "bg-white text-[#111110]" : "text-white/50 hover:text-white/80"
                            )}
                        >
                            Annual
                            <span className="text-[#7B6FFF] text-xs font-semibold">−20%</span>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {plans.map((plan) => {
                        const price = annual ? plan.annual : plan.monthly
                        const period = price === 0 ? "forever" : `/ ${plan.period}`

                        return (
                            <div
                                key={plan.name}
                                className={cn(
                                    "relative rounded-2xl p-9 border transition-transform duration-300",
                                    plan.featured
                                        ? "bg-[#5B4FE8] border-transparent scale-[1.02] -translate-y-1 hover:-translate-y-3"
                                        : "bg-white/[0.04] border-white/[0.08] hover:-translate-y-1 hover:border-white/20"
                                )}
                            >
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#333] text-[0.7rem] font-bold tracking-[0.08em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                                        ⚡ Most Popular
                                    </div>
                                )}

                                {/* Plan badge */}
                                <Badge
                                    className={cn(
                                        "mb-6 text-[0.7rem] tracking-[0.1em] uppercase font-semibold rounded-full",
                                        plan.featured
                                            ? "bg-white/20 text-white border-transparent hover:bg-white/20"
                                            : "bg-white/[0.08] text-white/50 border-transparent hover:bg-white/[0.08]"
                                    )}
                                >
                                    {plan.badge}
                                </Badge>

                                <h3 className="font-serif text-[1.8rem] text-white tracking-[-0.02em] mb-2">
                                    {plan.name}
                                </h3>
                                <p className={cn(
                                    "text-sm leading-relaxed font-light mb-8",
                                    plan.featured ? "text-white/65" : "text-white/45"
                                )}>
                                    {plan.desc}
                                </p>

                                {/* Price */}
                                <div className="mb-8">
                                    <span className="font-serif text-[3.5rem] text-white tracking-[-0.04em] leading-none">
                                        {price === 0 ? "$0" : `$${price}`}
                                    </span>
                                    <span className={cn(
                                        "text-sm ml-1",
                                        plan.featured ? "text-white/60" : "text-white/40"
                                    )}>
                                        {period}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className={cn(
                                    "h-px mb-7",
                                    plan.featured ? "bg-white/20" : "bg-white/[0.08]"
                                )} />

                                {/* Features */}
                                <ul className="space-y-3.5 mb-9">
                                    {plan.features.map((f) => (
                                        <li
                                            key={f.text}
                                            className={cn(
                                                "flex items-center gap-3 text-sm font-light",
                                                f.included
                                                    ? plan.featured ? "text-white/85" : "text-white/60"
                                                    : "text-white/20"
                                            )}
                                        >
                                            <span className={cn(
                                                "w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0",
                                                plan.featured ? "bg-white/25" : "bg-white/10"
                                            )}>
                                                {f.included
                                                    ? <Check size={10} strokeWidth={3} className={plan.featured ? "text-white" : "text-white/60"} />
                                                    : <Minus size={10} strokeWidth={3} />
                                                }
                                            </span>
                                            {f.text}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                {plan.name === "Scale" ? (
                                    <Button
                                        className="w-full rounded-full bg-transparent border border-white/15 text-white/70 hover:bg-white/[0.06] hover:border-white/30 hover:text-white transition-all"
                                    >
                                        {plan.cta}
                                    </Button>
                                ) : (
                                    <SignInButton mode="modal">
                                        <Button
                                            className={cn(
                                                "w-full rounded-full transition-all",
                                                plan.featured
                                                    ? "bg-white text-[#5B4FE8] font-semibold hover:bg-[#F0EEFF] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                                                    : "bg-transparent border border-white/15 text-white/70 hover:bg-white/[0.06] hover:border-white/30 hover:text-white"
                                            )}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </SignInButton>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Footer note */}
                <p className="text-center text-white/20 text-xs mt-10 font-light">
                    All plans include SSL encryption · GDPR compliant · Cancel anytime
                </p>
            </div>
        </section>
    )
}