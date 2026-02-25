/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacCancerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacCancer = React.forwardRef<SVGSVGElement, ZodiacCancerProps>(
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
      <path d="M21 14.5A9 6.5 0 0 1 5.5 19" />
  <path d="M3 9.5A9 6.5 0 0 1 18.5 5" />
  <circle cx="17.5" cy="14.5" r="3.5" />
  <circle cx="6.5" cy="9.5" r="3.5" />
    </svg>
  )
);
ZodiacCancer.displayName = "ZodiacCancer";
export const ZodiacCancerMetadata = { 
  id: "zodiac-cancer", 
  baseId: "zodiac-cancer", 
  variant: "default", 
  name: "Zodiac Cancer", 
  category: "zodiac", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZodiacCancer;
