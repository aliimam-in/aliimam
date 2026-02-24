/**
 * Auto-generated logo component: Door Closed Locked (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DoorClosedLockedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DoorClosedLockedLogo = React.forwardRef<SVGSVGElement, DoorClosedLockedLogoProps>(
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
  <path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
  <path d="M2 20h8" />
  <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
  <rect x="14" y="17" width="8" height="5" rx="1" />
    </svg>
  )
);

DoorClosedLockedLogo.displayName = "DoorClosedLockedLogo";

export const DoorClosedLockedLogoMetadata = {
  id: "door-closed-locked",
  baseId: "door-closed-locked",
  variant: "default",
  name: "Door Closed Locked",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DoorClosedLockedLogo;
