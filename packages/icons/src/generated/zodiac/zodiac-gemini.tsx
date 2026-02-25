/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacGeminiProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacGemini = React.forwardRef<SVGSVGElement, ZodiacGeminiProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 4.525v14.948" />
  <path d="M20 3A17 17 0 0 1 4 3" />
  <path d="M4 21a17 17 0 0 1 16 0" />
  <path d="M8 4.525v14.948" />
    </svg>
  )
);
ZodiacGemini.displayName = "ZodiacGemini";
export const ZodiacGeminiMetadata = { id: "zodiac-gemini", baseId: "zodiac-gemini", variant: "default", name: "Zodiac Gemini", category: "zodiac", tags: [], viewBox: "0 0 24 24" } as const;
export default ZodiacGemini;
