/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TagRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TagRightFilled = React.forwardRef<SVGSVGElement, TagRightFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17.88 6.1201L3.92 20.0801C3.49 20.5101 2.77 20.4701 2.42 19.9801C1.92 19.2901 1.82 18.3301 2.34 17.5001L5.1 13.0701C5.47 12.4801 5.47 11.5201 5.1 10.9301L2.34 6.5001C1.41 5.0201 2.48 3.1001 4.22 3.1001H15.67C16.35 3.1001 17.19 3.5701 17.55 4.1401L18.02 4.8801C18.26 5.2801 18.21 5.7901 17.88 6.1201Z" fill="currentColor"/>
<path d="M21.63 13.11L16.45 20.01C16.09 20.5 15.29 20.9 14.67 20.9H7.50999C6.61999 20.9 6.16999 19.82 6.79999 19.19L18.32 7.67999C18.77 7.22999 19.54 7.30999 19.88 7.85999L21.73 10.83C22.13 11.47 22.09 12.5 21.63 13.11Z" fill="currentColor"/>
    </svg>
  )
);
TagRightFilled.displayName = "TagRightFilled";
export const TagRightFilledMetadata = { 
  id: "tag-right_filled", 
  baseId: "tag-right", 
  variant: "filled", 
  name: "Tag Right", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TagRightFilled;
