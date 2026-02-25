/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AirVentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AirVent = React.forwardRef<SVGSVGElement, AirVentProps>(
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
      <path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" />
  <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
  <path d="M6 8h12" />
  <path d="M6.6 15.572A2 2 0 1 0 10 17v-5" />
    </svg>
  )
);
AirVent.displayName = "AirVent";
export const AirVentMetadata = { 
  id: "air-vent", 
  baseId: "air-vent", 
  variant: "default", 
  name: "Air Vent", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AirVent;
