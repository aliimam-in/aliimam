/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UnplugProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Unplug = React.forwardRef<SVGSVGElement, UnplugProps>(
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
      <path d="m19 5 3-3" />
  <path d="m2 22 3-3" />
  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
  <path d="M7.5 13.5 10 11" />
  <path d="M10.5 16.5 13 14" />
  <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
    </svg>
  )
);
Unplug.displayName = "Unplug";
export const UnplugMetadata = { 
  id: "unplug", 
  baseId: "unplug", 
  variant: "default", 
  name: "Unplug", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Unplug;
