import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type GradientVariant = "purple" | "blue" | "green";

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    variant?: GradientVariant;
    className?: string;
}

const gradientMap: Record<GradientVariant, string> = {
    purple:
        "bg-gradient-to-br from-[#7C6EFF]/15 via-[#B69CFF]/10 to-transparent",
    blue:
        "bg-gradient-to-br from-[#38BDF8]/15 via-[#60A5FA]/10 to-transparent",
    green:
        "bg-gradient-to-br from-[#4ADE80]/15 via-[#86EFAC]/10 to-transparent",
};

export function FeatureCard({
    title,
    description,
    icon,
    variant = "purple",
    className,
}: FeatureCardProps) {
    return (
        <Card
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-black/40",
                className
            )}
        >
            {/* Gradient background */}
            <div
                className={cn(
                    "pointer-events-none absolute inset-0",
                    gradientMap[variant]
                )}
            />

            <CardContent className="relative flex flex-col gap-3 p-6">
                {icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/60 text-primary shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-110 dark:bg-white/10">
                        {icon}
                    </div>
                )}

                <h3 className="text-lg font-semibold tracking-tight">
                    {title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}
