/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Share2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Share2 = React.forwardRef<SVGSVGElement, Share2Props>(
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
      <circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  )
);
Share2.displayName = "Share2";
export const Share2Metadata = { 
  id: "share-2", 
  baseId: "share-2", 
  variant: "default", 
  name: "Share 2", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Share2;
