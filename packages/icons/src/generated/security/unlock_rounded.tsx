/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UnlockRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UnlockRounded = React.forwardRef<SVGSVGElement, UnlockRoundedProps>(
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
      <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10V8C6 4.69 7 2 12 2C16.5 2 18 4 18 7"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
UnlockRounded.displayName = "UnlockRounded";
export const UnlockRoundedMetadata = { 
  id: "unlock_rounded", 
  baseId: "unlock", 
  variant: "rounded", 
  name: "Unlock", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UnlockRounded;
