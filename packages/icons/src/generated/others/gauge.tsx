/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GaugeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gauge = React.forwardRef<SVGSVGElement, GaugeProps>(
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
      <path d="m12 14 4-4" />
  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
);
Gauge.displayName = "Gauge";
export const GaugeMetadata = { 
  id: "gauge", 
  baseId: "gauge", 
  variant: "default", 
  name: "Gauge", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Gauge;
