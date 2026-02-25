/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AirplayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Airplay = React.forwardRef<SVGSVGElement, AirplayProps>(
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
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
  <path d="m12 15 5 6H7Z" />
    </svg>
  )
);
Airplay.displayName = "Airplay";
export const AirplayMetadata = { 
  id: "airplay", 
  baseId: "airplay", 
  variant: "default", 
  name: "Airplay", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Airplay;
