/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeartCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HeartCircleRounded = React.forwardRef<SVGSVGElement, HeartCircleRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.33 17.45C12.15 17.51 11.84 17.51 11.66 17.45C10.1 16.92 6.60001 14.69 6.60001 10.91C6.60001 9.24 7.94001 7.89001 9.60001 7.89001C10.58 7.89001 11.45 8.36001 12 9.10001C12.54 8.37001 13.42 7.89001 14.4 7.89001C16.06 7.89001 17.4 9.24 17.4 10.91C17.4 14.69 13.9 16.92 12.33 17.45Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HeartCircleRounded.displayName = "HeartCircleRounded";
export const HeartCircleRoundedMetadata = { 
  id: "heart-circle_rounded", 
  baseId: "heart-circle", 
  variant: "rounded", 
  name: "Heart Circle", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HeartCircleRounded;
