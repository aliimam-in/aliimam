/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacLeoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacLeo = React.forwardRef<SVGSVGElement, ZodiacLeoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0" />
  <circle cx="7" cy="16" r="3" />
    </svg>
  )
);
ZodiacLeo.displayName = "ZodiacLeo";
export const ZodiacLeoMetadata = { 
  id: "zodiac-leo", 
  baseId: "zodiac-leo", 
  variant: "default", 
  name: "Zodiac Leo", 
  category: "zodiac", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZodiacLeo;
