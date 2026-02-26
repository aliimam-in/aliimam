/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudMoonProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudMoon = React.forwardRef<SVGSVGElement, CloudMoonProps>(
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
      <path d="M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z" />
  <path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" />
    </svg>
  )
);
CloudMoon.displayName = "CloudMoon";
export const CloudMoonMetadata = { 
  id: "cloud-moon", 
  baseId: "cloud-moon", 
  variant: "default", 
  name: "Cloud Moon", 
  category: "cloud", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudMoon;
