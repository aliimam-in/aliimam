/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacLibraProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacLibra = React.forwardRef<SVGSVGElement, ZodiacLibraProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21" />
  <path d="M3 20h18" />
    </svg>
  )
);
ZodiacLibra.displayName = "ZodiacLibra";
export const ZodiacLibraMetadata = { id: "zodiac-libra", baseId: "zodiac-libra", variant: "default", name: "Zodiac Libra", category: "zodiac", tags: [], viewBox: "0 0 24 24" } as const;
export default ZodiacLibra;
