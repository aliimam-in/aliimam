/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoreCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoreCircle = React.forwardRef<SVGSVGElement, MoreCircleProps>(
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
      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9965 12H16.0054" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 12H12.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99451 12H8.00349" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MoreCircle.displayName = "MoreCircle";
export const MoreCircleMetadata = { 
  id: "more-circle", 
  baseId: "more-circle", 
  variant: "default", 
  name: "More Circle", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoreCircle;
