/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BroomRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BroomRounded = React.forwardRef<SVGSVGElement, BroomRoundedProps>(
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
      <path d="M9.87 5.66998L6.45 7.74999L4.89001 5.19C4.32001 4.25 4.62 3.01 5.56 2.44C6.5 1.87 7.74 2.16998 8.31 3.10998L9.87 5.66998Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.82 9.15997L8.66001 11.08C6.82001 12.2 6.26 14.46 7.15 16.26L9.2 20.44C9.86 21.79 11.46 22.26 12.74 21.47L19.17 17.56C20.46 16.78 20.77 15.15 19.88 13.94L17.11 10.2C15.91 8.58001 13.66 8.03997 11.82 9.15997Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7566 5.09797L5.63205 8.21857L7.71245 11.635L12.837 8.51437L10.7566 5.09797Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.31 16.81L15.96 19.52"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.75 18.37L13.4 21.08"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.87 15.25L18.52 17.96"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BroomRounded.displayName = "BroomRounded";
export const BroomRoundedMetadata = { 
  id: "broom_rounded", 
  baseId: "broom", 
  variant: "rounded", 
  name: "Broom", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BroomRounded;
