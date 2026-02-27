/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GrammerlyRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GrammerlyRounded = React.forwardRef<SVGSVGElement, GrammerlyRoundedProps>(
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
      <path d="M19.07 4.95002C23.04 8.92002 22.97 15.4 18.87 19.29C15.08 22.88 8.92996 22.88 5.12996 19.29C1.01996 15.4 0.94995 8.92002 4.92995 4.95002C8.82995 1.04002 15.17 1.04002 19.07 4.95002Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.84 16.07C13.72 18.07 10.28 18.07 8.16998 16.07" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GrammerlyRounded.displayName = "GrammerlyRounded";
export const GrammerlyRoundedMetadata = { 
  id: "grammerly_rounded", 
  baseId: "grammerly", 
  variant: "rounded", 
  name: "Grammerly", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GrammerlyRounded;
