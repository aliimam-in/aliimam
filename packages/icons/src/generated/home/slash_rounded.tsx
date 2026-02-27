/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SlashRounded = React.forwardRef<SVGSVGElement, SlashRoundedProps>(
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
      <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.9 5L4.90002 19"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SlashRounded.displayName = "SlashRounded";
export const SlashRoundedMetadata = { 
  id: "slash_rounded", 
  baseId: "slash", 
  variant: "rounded", 
  name: "Slash", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SlashRounded;
