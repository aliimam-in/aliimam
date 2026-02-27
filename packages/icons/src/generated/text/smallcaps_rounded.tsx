/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SmallcapsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SmallcapsRounded = React.forwardRef<SVGSVGElement, SmallcapsRoundedProps>(
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
      <path d="M1.98999 5.93001V4.42001C1.98999 3.40001 2.81999 2.57001 3.83999 2.57001H16.76C17.78 2.57001 18.61 3.40001 18.61 4.42001V5.93001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.3 18.1V3.32001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.8999 18.1H12.4799" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6799 10.34H20.6899C21.4199 10.34 22.0099 10.93 22.0099 11.66V12.46" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0801 21.43V10.87" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.9399 21.43H18.2199" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SmallcapsRounded.displayName = "SmallcapsRounded";
export const SmallcapsRoundedMetadata = { 
  id: "smallcaps_rounded", 
  baseId: "smallcaps", 
  variant: "rounded", 
  name: "Smallcaps", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SmallcapsRounded;
