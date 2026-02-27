/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlaneTakeoffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlaneTakeoff = React.forwardRef<SVGSVGElement, PlaneTakeoffProps>(
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
      <path d="M2 22h20" />
  <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
    </svg>
  )
);
PlaneTakeoff.displayName = "PlaneTakeoff";
export const PlaneTakeoffMetadata = { 
  id: "plane-takeoff", 
  baseId: "plane-takeoff", 
  variant: "default", 
  name: "Plane Takeoff", 
  category: "transport", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlaneTakeoff;
