/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeaterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Heater = React.forwardRef<SVGSVGElement, HeaterProps>(
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
      <path d="M11 8c2-3-2-3 0-6" />
  <path d="M15.5 8c2-3-2-3 0-6" />
  <path d="M6 10h.01" />
  <path d="M6 14h.01" />
  <path d="M10 16v-4" />
  <path d="M14 16v-4" />
  <path d="M18 16v-4" />
  <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
  <path d="M5 20v2" />
  <path d="M19 20v2" />
    </svg>
  )
);
Heater.displayName = "Heater";
export const HeaterMetadata = { 
  id: "heater", 
  baseId: "heater", 
  variant: "default", 
  name: "Heater", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Heater;
