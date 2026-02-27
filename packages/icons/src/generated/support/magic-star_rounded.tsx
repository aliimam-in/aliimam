/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MagicStarRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MagicStarRounded = React.forwardRef<SVGSVGElement, MagicStarRoundedProps>(
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
      <path d="M17.29 4.13999L17.22 7.92997C17.21 8.44997 17.54 9.13999 17.96 9.44999L20.44 11.33C22.03 12.53 21.77 14 19.87 14.6L16.64 15.61C16.1 15.78 15.53 16.37 15.39 16.92L14.62 19.86C14.01 22.18 12.49 22.41 11.23 20.37L9.46999 17.52C9.14999 17 8.39 16.61 7.79 16.64L4.45003 16.81C2.06003 16.93 1.38002 15.55 2.94002 13.73L4.92 11.43C5.29 11 5.46 10.2 5.29 9.65998L4.28005 6.42997C3.69005 4.52997 4.75004 3.47999 6.64004 4.09999L9.59005 5.06999C10.09 5.22999 10.84 5.11998 11.26 4.80998L14.34 2.58998C16 1.38998 17.33 2.08999 17.29 4.13999Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.91 22L18.88 18.97"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MagicStarRounded.displayName = "MagicStarRounded";
export const MagicStarRoundedMetadata = { 
  id: "magic-star_rounded", 
  baseId: "magic-star", 
  variant: "rounded", 
  name: "Magic Star", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MagicStarRounded;
