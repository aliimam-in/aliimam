/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoreRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoreRounded = React.forwardRef<SVGSVGElement, MoreRoundedProps>(
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
      <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#292D32" strokeWidth="1.5"/>
<path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#292D32" strokeWidth="1.5"/>
<path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#292D32" strokeWidth="1.5"/>
    </svg>
  )
);
MoreRounded.displayName = "MoreRounded";
export const MoreRoundedMetadata = { 
  id: "more_rounded", 
  baseId: "more", 
  variant: "rounded", 
  name: "More", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoreRounded;
