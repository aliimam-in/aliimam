/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MonitorMobbileRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MonitorMobbileRounded = React.forwardRef<SVGSVGElement, MonitorMobbileRoundedProps>(
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
      <path d="M10 16.95H6.21C2.84 16.95 2 16.11 2 12.74V6.74003C2 3.37003 2.84 2.53003 6.21 2.53003H16.74C20.11 2.53003 20.95 3.37003 20.95 6.74003" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21.47V16.95" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12.95H10" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.73999 21.47H9.99999" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12.8V18.51C22 20.88 21.41 21.47 19.04 21.47H15.49C13.12 21.47 12.53 20.88 12.53 18.51V12.8C12.53 10.43 13.12 9.84003 15.49 9.84003H19.04C21.41 9.84003 22 10.43 22 12.8Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.2445 18.25H17.2535" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MonitorMobbileRounded.displayName = "MonitorMobbileRounded";
export const MonitorMobbileRoundedMetadata = { 
  id: "monitor-mobbile_rounded", 
  baseId: "monitor-mobbile", 
  variant: "rounded", 
  name: "Monitor Mobbile", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MonitorMobbileRounded;
