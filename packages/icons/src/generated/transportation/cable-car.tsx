/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CableCarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CableCar = React.forwardRef<SVGSVGElement, CableCarProps>(
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
      <path d="M10 3h.01" />
  <path d="M14 2h.01" />
  <path d="m2 9 20-5" />
  <path d="M12 12V6.5" />
  <rect width="16" height="10" x="4" y="12" rx="3" />
  <path d="M9 12v5" />
  <path d="M15 12v5" />
  <path d="M4 17h16" />
    </svg>
  )
);
CableCar.displayName = "CableCar";
export const CableCarMetadata = { 
  id: "cable-car", 
  baseId: "cable-car", 
  variant: "default", 
  name: "Cable Car", 
  category: "transportation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CableCar;
