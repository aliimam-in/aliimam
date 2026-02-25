/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AtSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AtSign = React.forwardRef<SVGSVGElement, AtSignProps>(
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
      <circle cx="12" cy="12" r="4" />
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  )
);
AtSign.displayName = "AtSign";
export const AtSignMetadata = { 
  id: "at-sign", 
  baseId: "at-sign", 
  variant: "default", 
  name: "At Sign", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AtSign;
