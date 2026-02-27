/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectLeftFilled = React.forwardRef<SVGSVGElement, DirectLeftFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M21.2901 17.0201L19.5501 13.5401C19.0701 12.5701 19.0701 11.4401 19.5501 10.4701L21.2901 6.99007C22.7801 4.00007 19.5701 0.860073 16.6201 2.42007L15.0801 3.24007C14.8701 3.35007 14.7001 3.53007 14.6001 3.75007L8.90005 16.3901C8.67005 16.9101 8.88005 17.5201 9.38005 17.7801L16.6201 21.5901C19.5701 23.1501 22.7801 20.0001 21.2901 17.0201Z" fill="currentColor"/>
<path d="M7.69002 15.6L11.42 7.31996C11.84 6.38996 10.84 5.44996 9.94002 5.92996L4.17002 8.95996C1.72002 10.25 1.72002 13.75 4.17002 15.04L6.21002 16.11C6.76002 16.4 7.43002 16.17 7.69002 15.6Z" fill="currentColor"/>
    </svg>
  )
);
DirectLeftFilled.displayName = "DirectLeftFilled";
export const DirectLeftFilledMetadata = { 
  id: "direct-left_filled", 
  baseId: "direct-left", 
  variant: "filled", 
  name: "Direct Left", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectLeftFilled;
