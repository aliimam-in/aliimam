/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RepeateOneRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RepeateOneRounded = React.forwardRef<SVGSVGElement, RepeateOneRoundedProps>(
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
      <path d="M14 3L16.44 5.34003L8.48999 5.32001C4.91999 5.32001 1.98999 8.25003 1.98999 11.84C1.98999 13.63 2.71999 15.26 3.89999 16.44"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0001 21L7.56006 18.66L15.5101 18.68C19.0801 18.68 22.0101 15.75 22.0101 12.16C22.0101 10.37 21.2801 8.74 20.1001 7.56"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.25 14.67V9.33002L10.75 11"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RepeateOneRounded.displayName = "RepeateOneRounded";
export const RepeateOneRoundedMetadata = { 
  id: "repeate-one_rounded", 
  baseId: "repeate-one", 
  variant: "rounded", 
  name: "Repeate One", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RepeateOneRounded;
