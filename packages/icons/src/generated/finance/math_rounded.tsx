/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MathRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MathRounded = React.forwardRef<SVGSVGElement, MathRoundedProps>(
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
      <path d="M14.4207 5.63965H21.7007"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.29956 5.64014H9.57956"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.4207 15.3301H21.7007"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.4207 21.3896H21.7007"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0894 9.27V2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.29956 22L9.57956 14.73"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.57956 22L2.29956 14.73"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MathRounded.displayName = "MathRounded";
export const MathRoundedMetadata = { 
  id: "math_rounded", 
  baseId: "math", 
  variant: "rounded", 
  name: "Math", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MathRounded;
