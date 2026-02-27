/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HashtagRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HashtagRounded = React.forwardRef<SVGSVGElement, HashtagRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17H14C15.65 17 17 15.65 17 14V10C17 8.35 15.65 7 14 7H10C8.35 7 7 8.35 7 10V14C7 15.65 8.35 17 10 17Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12H17"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HashtagRounded.displayName = "HashtagRounded";
export const HashtagRoundedMetadata = { 
  id: "hashtag_rounded", 
  baseId: "hashtag", 
  variant: "rounded", 
  name: "Hashtag", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HashtagRounded;
