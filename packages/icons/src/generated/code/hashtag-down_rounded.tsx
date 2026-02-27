/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HashtagDownRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HashtagDownRounded = React.forwardRef<SVGSVGElement, HashtagDownRoundedProps>(
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
      <path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22L21 20" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22L17 20" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.95002 6.26001L8.90002 15.73" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.11 6.26001L12.06 15.73" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.53003 9.42001H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12.58H15.47" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HashtagDownRounded.displayName = "HashtagDownRounded";
export const HashtagDownRoundedMetadata = { 
  id: "hashtag-down_rounded", 
  baseId: "hashtag-down", 
  variant: "rounded", 
  name: "Hashtag Down", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HashtagDownRounded;
