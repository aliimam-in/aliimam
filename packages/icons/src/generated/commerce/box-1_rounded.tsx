/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Box1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Box1Rounded = React.forwardRef<SVGSVGElement, Box1RoundedProps>(
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
      <path d="M3.17004 7.44L12 12.55L20.77 7.47"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21.61V12.54"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.93001 2.47998L4.59001 5.43998C3.38001 6.10998 2.39001 7.78998 2.39001 9.16998V14.82C2.39001 16.2 3.38001 17.88 4.59001 18.55L9.93001 21.52C11.07 22.15 12.94 22.15 14.08 21.52L19.42 18.55C20.63 17.88 21.62 16.2 21.62 14.82V9.16998C21.62 7.78998 20.63 6.10998 19.42 5.43998L14.08 2.46998C12.93 1.83998 11.07 1.83998 9.93001 2.47998Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Box1Rounded.displayName = "Box1Rounded";
export const Box1RoundedMetadata = { 
  id: "box-1_rounded", 
  baseId: "box-1", 
  variant: "rounded", 
  name: "Box 1", 
  category: "commerce", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Box1Rounded;
