/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StatusUpRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StatusUpRounded = React.forwardRef<SVGSVGElement, StatusUpRoundedProps>(
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
      <path d="M6.87988 18.15V16.08"   strokeLinecap="round"/>
<path d="M12 18.15V14.01"   strokeLinecap="round"/>
<path d="M17.1201 18.15V11.93"   strokeLinecap="round"/>
<path d="M17.1199 5.84998L16.6599 6.38998C14.1099 9.36998 10.6899 11.48 6.87988 12.43"   strokeLinecap="round"/>
<path d="M14.1899 5.84998H17.1199V8.76998"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
StatusUpRounded.displayName = "StatusUpRounded";
export const StatusUpRoundedMetadata = { 
  id: "status-up_rounded", 
  baseId: "status-up", 
  variant: "rounded", 
  name: "Status Up", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StatusUpRounded;
