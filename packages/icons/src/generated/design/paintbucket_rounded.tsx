/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PaintbucketRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaintbucketRounded = React.forwardRef<SVGSVGElement, PaintbucketRoundedProps>(
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
      <g clipPath="url(#clip0_210_5274)">
<path d="M3.76999 15.56L7.22999 19.02C9.65999 21.45 10.49 21.41 12.89 19.02L18.46 13.45C20.4 11.51 20.89 10.22 18.46 7.78996L15 4.32996C12.41 1.73996 11.28 2.38996 9.33999 4.32996L3.76999 9.89996C1.37999 12.3 1.17999 12.97 3.76999 15.56Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.2 16.79L18.54 17.88C17.61 19.43 18.33 20.7 20.14 20.7C21.95 20.7 22.67 19.43 21.74 17.88L21.08 16.79C20.56 15.93 19.71 15.93 19.2 16.79Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12.2399C7.56 10.7299 13.42 10.6799 19 12.1099L19.5 12.2399"   strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_210_5274">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);
PaintbucketRounded.displayName = "PaintbucketRounded";
export const PaintbucketRoundedMetadata = { 
  id: "paintbucket_rounded", 
  baseId: "paintbucket", 
  variant: "rounded", 
  name: "Paintbucket", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PaintbucketRounded;
