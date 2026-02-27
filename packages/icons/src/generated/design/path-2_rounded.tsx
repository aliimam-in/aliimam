/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Path2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Path2Rounded = React.forwardRef<SVGSVGElement, Path2RoundedProps>(
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
      <g clipPath="url(#clip0_210_5362)">
<path d="M9.87001 22H14.16C15.78 22 16.85 20.84 16.53 19.43L15.84 16.35H8.20001L7.51001 19.43C7.20001 20.76 8.34001 22 9.87001 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.83 16.35L18.77 13.74C20.41 12.28 20.48 11.26 19.18 9.60999L13.99 3.03C12.9 1.65 11.12 1.65 10.02 3.03L4.84001 9.60999C3.54001 11.26 3.54001 12.33 5.25001 13.74L8.19001 16.35"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.01 2.67004V6.97004"   strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_210_5362">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);
Path2Rounded.displayName = "Path2Rounded";
export const Path2RoundedMetadata = { 
  id: "path-2_rounded", 
  baseId: "path-2", 
  variant: "rounded", 
  name: "Path 2", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Path2Rounded;
