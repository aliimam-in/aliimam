/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StatusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StatusRounded = React.forwardRef<SVGSVGElement, StatusRoundedProps>(
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
      <path d="M2.45 14.97C3.52 18.41 6.4 21.06 9.98 21.79" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.05 10.98C2.56 5.93 6.82 2 12 2C17.18 2 21.44 5.94 21.95 10.98" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.01 21.8C17.58 21.07 20.45 18.45 21.54 15.02" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
StatusRounded.displayName = "StatusRounded";
export const StatusRoundedMetadata = { 
  id: "status_rounded", 
  baseId: "status", 
  variant: "rounded", 
  name: "Status", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StatusRounded;
