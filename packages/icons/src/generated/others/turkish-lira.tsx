/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TurkishLiraProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TurkishLira = React.forwardRef<SVGSVGElement, TurkishLiraProps>(
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
      <path d="M15 4 5 9" />
  <path d="m15 8.5-10 5" />
  <path d="M18 12a9 9 0 0 1-9 9V3" />
    </svg>
  )
);
TurkishLira.displayName = "TurkishLira";
export const TurkishLiraMetadata = { 
  id: "turkish-lira", 
  baseId: "turkish-lira", 
  variant: "default", 
  name: "Turkish Lira", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TurkishLira;
