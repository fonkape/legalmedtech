"use client";

import React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Legacy theme provider kept as a shell to avoid breaking imports
    // The theme is now hardcoded in CSS
    return <>{children}</>;
}
