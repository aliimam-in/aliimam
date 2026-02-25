/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LampFloorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LampFloor = React.forwardRef<SVGSVGElement, LampFloorProps>(
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
      <path d="M12 10v12" />
  <path d="M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z" />
  <path d="M9 22h6" />
    </svg>
  )
);
LampFloor.displayName = "LampFloor";
export const LampFloorMetadata = { 
  id: "lamp-floor", 
  baseId: "lamp-floor", 
  variant: "default", 
  name: "Lamp Floor", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LampFloor;
