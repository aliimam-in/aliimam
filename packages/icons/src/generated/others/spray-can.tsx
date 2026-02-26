/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SprayCanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SprayCan = React.forwardRef<SVGSVGElement, SprayCanProps>(
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
      <path d="M3 3h.01" />
  <path d="M7 5h.01" />
  <path d="M11 7h.01" />
  <path d="M3 7h.01" />
  <path d="M7 9h.01" />
  <path d="M3 11h.01" />
  <rect width="4" height="4" x="15" y="5" />
  <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
  <path d="m13 14 8-2" />
  <path d="m13 19 8-2" />
    </svg>
  )
);
SprayCan.displayName = "SprayCan";
export const SprayCanMetadata = { 
  id: "spray-can", 
  baseId: "spray-can", 
  variant: "default", 
  name: "Spray Can", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SprayCan;
