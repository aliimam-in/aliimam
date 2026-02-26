/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudOff = React.forwardRef<SVGSVGElement, CloudOffProps>(
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
      <path d="M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057" />
  <path d="M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78" />
  <path d="m2 2 20 20" />
    </svg>
  )
);
CloudOff.displayName = "CloudOff";
export const CloudOffMetadata = { 
  id: "cloud-off", 
  baseId: "cloud-off", 
  variant: "default", 
  name: "Cloud Off", 
  category: "cloud", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudOff;
