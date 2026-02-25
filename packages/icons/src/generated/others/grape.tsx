/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GrapeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Grape = React.forwardRef<SVGSVGElement, GrapeProps>(
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
      <path d="M22 5V2l-5.89 5.89" />
  <circle cx="16.6" cy="15.89" r="3" />
  <circle cx="8.11" cy="7.4" r="3" />
  <circle cx="12.35" cy="11.65" r="3" />
  <circle cx="13.91" cy="5.85" r="3" />
  <circle cx="18.15" cy="10.09" r="3" />
  <circle cx="6.56" cy="13.2" r="3" />
  <circle cx="10.8" cy="17.44" r="3" />
  <circle cx="5" cy="19" r="3" />
    </svg>
  )
);
Grape.displayName = "Grape";
export const GrapeMetadata = { 
  id: "grape", 
  baseId: "grape", 
  variant: "default", 
  name: "Grape", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Grape;
