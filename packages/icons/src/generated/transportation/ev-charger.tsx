/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EvChargerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EvCharger = React.forwardRef<SVGSVGElement, EvChargerProps>(
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
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" />
  <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" />
  <path d="M2 21h13" />
  <path d="M3 7h11" />
  <path d="m9 11-2 3h3l-2 3" />
    </svg>
  )
);
EvCharger.displayName = "EvCharger";
export const EvChargerMetadata = { 
  id: "ev-charger", 
  baseId: "ev-charger", 
  variant: "default", 
  name: "Ev Charger", 
  category: "transportation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EvCharger;
