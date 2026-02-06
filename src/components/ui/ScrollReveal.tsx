"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    style?: React.CSSProperties;
}

export function ScrollReveal({
    children,
    className,
    as = "h2",
    style,
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLElement>(null);

    // Tweaked offsets to ensure visibility range is reasonable
    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["start 0.9", "end 0.2"],
    });

    const Component = motion(as as any) as any;

    return (
        <Component
            ref={elementRef}
            className={cn("relative mx-auto w-fit grid", className)} // 'grid' allows stacking children in same cell
            style={style}
        >
            {/* 1. Ghost Text (The empty state) */}
            <span
                className="opacity-20 col-start-1 row-start-1"
                aria-hidden="true"
            >
                {children}
            </span>

            {/* 2. Filled Text (The animate state) */}
            <motion.span
                className="col-start-1 row-start-1 select-none"
                style={{
                    // Use clipPath to swipe reveal from left to right
                    // inset(top right bottom left)
                    // We want to reveal from LEFT to RIGHT.
                    // So we clip the RIGHT side.
                    // Start (0% progress): clip 100% of right side -> inset(0% 100% 0% 0%)
                    // End (100% progress): clip 0% of right side -> inset(0% 0% 0% 0%)
                    clipPath: useTransform(scrollYProgress, (val) => {
                        // Ensure minimal visibility to avoid weird glitch at 0? 
                        // No, but ensure bounds.
                        const v = Math.max(0, Math.min(1, val));
                        return `inset(0% ${100 - (v * 100)}% 0% 0%)`;
                    }),
                }}
            >
                {children}
            </motion.span>
        </Component>
    );
}
