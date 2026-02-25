/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DoorOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoorOpen = React.forwardRef<SVGSVGElement, DoorOpenProps>(
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
      <path d="M11 20H2" />
  <path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" />
  <path d="M11 4H8a2 2 0 0 0-2 2v14" />
  <path d="M14 12h.01" />
  <path d="M22 20h-3" />
    </svg>
  )
);
DoorOpen.displayName = "DoorOpen";
export const DoorOpenMetadata = { 
  id: "door-open", 
  baseId: "door-open", 
  variant: "default", 
  name: "Door Open", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DoorOpen;
