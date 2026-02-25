/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacAriesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacAries = React.forwardRef<SVGSVGElement, ZodiacAriesProps>(
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
      <path d="M12 7.5a4.5 4.5 0 1 1 5 4.5" />
  <path d="M7 12a4.5 4.5 0 1 1 5-4.5V21" />
    </svg>
  )
);
ZodiacAries.displayName = "ZodiacAries";
export const ZodiacAriesMetadata = { 
  id: "zodiac-aries", 
  baseId: "zodiac-aries", 
  variant: "default", 
  name: "Zodiac Aries", 
  category: "zodiac", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZodiacAries;
