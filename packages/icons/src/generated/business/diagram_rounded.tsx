/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiagramRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DiagramRounded = React.forwardRef<SVGSVGElement, DiagramRoundedProps>(
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
      <path d="M2 2V19C2 20.66 3.34 22 5 22H22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DiagramRounded.displayName = "DiagramRounded";
export const DiagramRoundedMetadata = { 
  id: "diagram_rounded", 
  baseId: "diagram", 
  variant: "rounded", 
  name: "Diagram", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DiagramRounded;
