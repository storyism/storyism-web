import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
    isFirst?: boolean;
};

// Variance of section styles = default, fullheight, padded
const sectionVariants = cva(
    "w-full", {
    variants: {
        variant: {
            default: "py-32",
            large: "py-60",
            full: "min-h-screen",
            compact: "py-16",
        },
        background: {
            light: "bg-white",
            dark: "bg-black",
            transparent: "bg-transparent",
        },
    },
    defaultVariants: {
        variant: "default",
        background: "transparent",
    },
});

export default function Section({ children, className, variant, isFirst, ...props }: SectionProps & VariantProps<typeof sectionVariants>) {
    const sectionClasses = cn(sectionVariants({ variant }), className);
    return (
        <section className={sectionClasses} {...props}>
            {
                isFirst ? (
                    <div className="-mt-21">
                        {children}
                    </div>
                ) : (
                    children
                )
            }
        </section>
    );
}
