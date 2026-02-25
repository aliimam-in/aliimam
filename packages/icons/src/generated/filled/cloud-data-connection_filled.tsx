/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudDataConnectionFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudDataConnectionFilled = React.forwardRef<SVGSVGElement, CloudDataConnectionFilledProps>(
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
      <path d="M15.262 4.087c.974 .768 1.566 1.848 1.678 2.997l.007 .107l.18 .025a3.42 3.42 0 0 1 2.867 3.184l.006 .188a3.42 3.42 0 0 1 -3.425 3.412h-3.575l.001 1.171a3 3 0 0 1 1.829 1.829h6.17a1 1 0 0 1 0 2h-6.17a3.001 3.001 0 0 1 -5.66 0h-6.17a1 1 0 0 1 0 -2h6.171a3 3 0 0 1 1.829 -1.83v-1.17h-2.74c-2.341 0 -4.26 -1.826 -4.26 -4.103c0 -2.001 1.481 -3.655 3.43 -4.026l.086 -.015l.049 -.112c.514 -1.124 1.508 -2.01 2.756 -2.447l.222 -.072c1.627 -.49 3.42 -.166 4.72 .862" />
    </svg>
  )
);
CloudDataConnectionFilled.displayName = "CloudDataConnectionFilled";
export const CloudDataConnectionFilledMetadata = { 
  id: "cloud-data-connection_filled", 
  baseId: "cloud-data-connection", 
  variant: "filled", 
  name: "Cloud Data Connection", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudDataConnectionFilled;
