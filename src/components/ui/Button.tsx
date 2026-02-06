import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-custom font-medium transition-theme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                    {
                        "bg-primary text-white shadow-sm hover:opacity-90 transition-colors":
                            variant === "primary",
                        "bg-gray-100 text-text-primary hover:bg-gray-200":
                            variant === "secondary",
                        "bg-transparent hover:bg-gray-100 text-text-primary":
                            variant === "ghost",
                        "border border-border-subtle text-primary hover:bg-primary/5 transition-colors":
                            variant === "outline",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-12 px-8 text-base": size === "md",
                        "h-14 px-10 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
