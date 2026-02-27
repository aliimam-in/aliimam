/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HashtagUpRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HashtagUpRounded = React.forwardRef<SVGSVGElement, HashtagUpRoundedProps>(
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
      <path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V16L17 18"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16L21 18"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.95002 6.26001L8.90002 15.73"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.11 6.26001L12.06 15.73"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.53003 9.42001H16"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12.58H15.47"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HashtagUpRounded.displayName = "HashtagUpRounded";
export const HashtagUpRoundedMetadata = { 
  id: "hashtag-up_rounded", 
  baseId: "hashtag-up", 
  variant: "rounded", 
  name: "Hashtag Up", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HashtagUpRounded;
