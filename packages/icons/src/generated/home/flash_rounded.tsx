/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlashRounded = React.forwardRef<SVGSVGElement, FlashRoundedProps>(
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
      <path d="M6.09001 13.28H9.18001V20.48C9.18001 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52C14.81 1.84 13.9 1.5 12.79 2.76L5.22001 11.36C4.30001 12.42 4.69001 13.28 6.09001 13.28Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FlashRounded.displayName = "FlashRounded";
export const FlashRoundedMetadata = { 
  id: "flash_rounded", 
  baseId: "flash", 
  variant: "rounded", 
  name: "Flash", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlashRounded;
