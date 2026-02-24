/**
 * Auto-generated logo component: Door Closed (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DoorClosedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DoorClosedLogo = React.forwardRef<SVGSVGElement, DoorClosedLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10 12h.01" />
  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
  <path d="M2 20h20" />
    </svg>
  )
);

DoorClosedLogo.displayName = "DoorClosedLogo";

export const DoorClosedLogoMetadata = {
  id: "door-closed",
  baseId: "door-closed",
  variant: "default",
  name: "Door Closed",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DoorClosedLogo;
