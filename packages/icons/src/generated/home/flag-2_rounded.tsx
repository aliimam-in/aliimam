/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Flag2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Flag2Rounded = React.forwardRef<SVGSVGElement, Flag2RoundedProps>(
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
      <path d="M6.45 2V22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.95 4L15.05 7.5C18.35 8.9 18.35 11.3 15.25 12.9L6.95 17" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Flag2Rounded.displayName = "Flag2Rounded";
export const Flag2RoundedMetadata = { 
  id: "flag-2_rounded", 
  baseId: "flag-2", 
  variant: "rounded", 
  name: "Flag 2", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Flag2Rounded;
