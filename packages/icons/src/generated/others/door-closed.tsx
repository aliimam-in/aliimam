/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DoorClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoorClosed = React.forwardRef<SVGSVGElement, DoorClosedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 12h.01" />
  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
  <path d="M2 20h20" />
    </svg>
  )
);
DoorClosed.displayName = "DoorClosed";
export const DoorClosedMetadata = { id: "door-closed", baseId: "door-closed", variant: "default", name: "Door Closed", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default DoorClosed;
