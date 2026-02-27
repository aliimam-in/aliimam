/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WomanRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WomanRounded = React.forwardRef<SVGSVGElement, WomanRoundedProps>(
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
      <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19H9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
WomanRounded.displayName = "WomanRounded";
export const WomanRoundedMetadata = { 
  id: "woman_rounded", 
  baseId: "woman", 
  variant: "rounded", 
  name: "Woman", 
  category: "gender", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WomanRounded;
