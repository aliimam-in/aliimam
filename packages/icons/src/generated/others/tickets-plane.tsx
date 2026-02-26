/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TicketsPlaneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TicketsPlane = React.forwardRef<SVGSVGElement, TicketsPlaneProps>(
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
      <path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
  <path d="m12 13.5 3.794.506" />
  <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" />
  <path d="M6 10V8" />
  <path d="M6 14v1" />
  <path d="M6 19v2" />
  <rect x="2" y="8" width="20" height="13" rx="2" />
    </svg>
  )
);
TicketsPlane.displayName = "TicketsPlane";
export const TicketsPlaneMetadata = { 
  id: "tickets-plane", 
  baseId: "tickets-plane", 
  variant: "default", 
  name: "Tickets Plane", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TicketsPlane;
