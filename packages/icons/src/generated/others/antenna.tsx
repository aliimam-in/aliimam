/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AntennaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Antenna = React.forwardRef<SVGSVGElement, AntennaProps>(
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
      <path d="M2 12 7 2" />
  <path d="m7 12 5-10" />
  <path d="m12 12 5-10" />
  <path d="m17 12 5-10" />
  <path d="M4.5 7h15" />
  <path d="M12 16v6" />
    </svg>
  )
);
Antenna.displayName = "Antenna";
export const AntennaMetadata = { 
  id: "antenna", 
  baseId: "antenna", 
  variant: "default", 
  name: "Antenna", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Antenna;
