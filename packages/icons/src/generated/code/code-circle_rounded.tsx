/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CodeCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CodeCircleRounded = React.forwardRef<SVGSVGElement, CodeCircleRoundedProps>(
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
      <path d="M8 10L6 12L8 14"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 10L18 12L16 14"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9.66998L11 14.33"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CodeCircleRounded.displayName = "CodeCircleRounded";
export const CodeCircleRoundedMetadata = { 
  id: "code-circle_rounded", 
  baseId: "code-circle", 
  variant: "rounded", 
  name: "Code Circle", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CodeCircleRounded;
