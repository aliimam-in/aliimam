/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BucketCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BucketCircleRounded = React.forwardRef<SVGSVGElement, BucketCircleRoundedProps>(
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
      <path d="M9.41 15.95L7.01998 13.5601C6.21998 12.7601 6.21998 11.96 7.01998 11.17L11.01 7.17999L15.4 11.57C15.62 11.79 15.62 12.15 15.4 12.37L11.81 15.96C11.01 16.75 10.21 16.75 9.41 15.95Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.21 6.38L11.01 7.17999"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.45999 12.33L15.49 11.94"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.47 14.17C16.47 14.17 15.37 15.37 15.37 16.1C15.37 16.71 15.87 17.2 16.47 17.2C17.08 17.2 17.57 16.7 17.57 16.1C17.58 15.36 16.47 14.17 16.47 14.17Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BucketCircleRounded.displayName = "BucketCircleRounded";
export const BucketCircleRoundedMetadata = { 
  id: "bucket-circle_rounded", 
  baseId: "bucket-circle", 
  variant: "rounded", 
  name: "Bucket Circle", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BucketCircleRounded;
