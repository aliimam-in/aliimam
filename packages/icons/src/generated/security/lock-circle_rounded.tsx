/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LockCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LockCircleRounded = React.forwardRef<SVGSVGElement, LockCircleRoundedProps>(
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
      <path d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14.6C12.3314 14.6 12.6 14.3314 12.6 14C12.6 13.6687 12.3314 13.4 12 13.4C11.6686 13.4 11.4 13.6687 11.4 14C11.4 14.3314 11.6686 14.6 12 14.6Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LockCircleRounded.displayName = "LockCircleRounded";
export const LockCircleRoundedMetadata = { 
  id: "lock-circle_rounded", 
  baseId: "lock-circle", 
  variant: "rounded", 
  name: "Lock Circle", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LockCircleRounded;
