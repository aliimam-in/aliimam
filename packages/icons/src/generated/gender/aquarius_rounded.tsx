/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AquariusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AquariusRounded = React.forwardRef<SVGSVGElement, AquariusRoundedProps>(
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
      <path d="M12 16C15.87 16 19 12.87 19 9C19 5.13 15.87 2 12 2C8.13 2 5 5.13 5 9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19H9"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AquariusRounded.displayName = "AquariusRounded";
export const AquariusRoundedMetadata = { 
  id: "aquarius_rounded", 
  baseId: "aquarius", 
  variant: "rounded", 
  name: "Aquarius", 
  category: "gender", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AquariusRounded;
