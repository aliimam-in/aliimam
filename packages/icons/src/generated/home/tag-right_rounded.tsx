/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TagRightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TagRightRounded = React.forwardRef<SVGSVGElement, TagRightRoundedProps>(
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
      <path d="M4.21995 3.10001H15.6599C16.3399 3.10001 17.19 3.57001 17.55 4.15001L21.73 10.83C22.13 11.48 22.09 12.5 21.63 13.11L16.45 20.01C16.08 20.5 15.28 20.9 14.67 20.9H4.21995C2.46995 20.9 1.40999 18.98 2.32999 17.49L5.09995 13.06C5.46995 12.47 5.46995 11.51 5.09995 10.92L2.32999 6.49001C1.40999 5.02001 2.47995 3.10001 4.21995 3.10001Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TagRightRounded.displayName = "TagRightRounded";
export const TagRightRoundedMetadata = { 
  id: "tag-right_rounded", 
  baseId: "tag-right", 
  variant: "rounded", 
  name: "Tag Right", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TagRightRounded;
