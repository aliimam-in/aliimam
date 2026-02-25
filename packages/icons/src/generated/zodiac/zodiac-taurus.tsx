/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacTaurusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacTaurus = React.forwardRef<SVGSVGElement, ZodiacTaurusProps>(
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
      <circle cx="12" cy="15" r="6" />
  <path d="M18 3A6 6 0 0 1 6 3" />
    </svg>
  )
);
ZodiacTaurus.displayName = "ZodiacTaurus";
export const ZodiacTaurusMetadata = { 
  id: "zodiac-taurus", 
  baseId: "zodiac-taurus", 
  variant: "default", 
  name: "Zodiac Taurus", 
  category: "zodiac", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZodiacTaurus;
