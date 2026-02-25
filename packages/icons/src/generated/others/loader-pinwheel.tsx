/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LoaderPinwheelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LoaderPinwheel = React.forwardRef<SVGSVGElement, LoaderPinwheelProps>(
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
      <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
  <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
  <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
  <circle cx="12" cy="12" r="10" />
    </svg>
  )
);
LoaderPinwheel.displayName = "LoaderPinwheel";
export const LoaderPinwheelMetadata = { 
  id: "loader-pinwheel", 
  baseId: "loader-pinwheel", 
  variant: "default", 
  name: "Loader Pinwheel", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LoaderPinwheel;
