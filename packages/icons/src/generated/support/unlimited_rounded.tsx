/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UnlimitedRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UnlimitedRounded = React.forwardRef<SVGSVGElement, UnlimitedRoundedProps>(
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
      <path d="M10.18 9.31995C9.35999 8.18995 8.05001 7.44995 6.54001 7.44995C4.03001 7.44995 1.98999 9.48994 1.98999 11.9999C1.98999 14.5099 4.03001 16.5499 6.54001 16.5499C8.23001 16.5499 9.80001 15.66 10.67 14.21L12 11.9999L13.32 9.78992C14.19 8.33992 15.76 7.44995 17.45 7.44995C19.96 7.44995 22 9.48994 22 11.9999C22 14.5099 19.96 16.5499 17.45 16.5499C15.95 16.5499 14.64 15.8099 13.81 14.6799"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
UnlimitedRounded.displayName = "UnlimitedRounded";
export const UnlimitedRoundedMetadata = { 
  id: "unlimited_rounded", 
  baseId: "unlimited", 
  variant: "rounded", 
  name: "Unlimited", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UnlimitedRounded;
