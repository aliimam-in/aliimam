/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BlendRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BlendRounded = React.forwardRef<SVGSVGElement, BlendRoundedProps>(
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
      <path d="M21.97 12C21.97 15.31 19.28 18 15.97 18C14.43 18 13.03 17.42 11.97 16.46C13.2 15.37 13.97 13.77 13.97 12C13.97 10.23 13.2 8.63 11.97 7.54C13.03 6.58 14.43 6 15.97 6C19.28 6 21.97 8.69 21.97 12Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.97 12C13.97 13.77 13.2 15.37 11.97 16.46C10.91 17.42 9.50997 18 7.96997 18C4.65997 18 1.96997 15.31 1.96997 12C1.96997 8.69 4.65997 6 7.96997 6C9.50997 6 10.91 6.58 11.97 7.54C13.2 8.63 13.97 10.23 13.97 12Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BlendRounded.displayName = "BlendRounded";
export const BlendRoundedMetadata = { 
  id: "blend_rounded", 
  baseId: "blend", 
  variant: "rounded", 
  name: "Blend", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BlendRounded;
