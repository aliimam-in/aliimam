/**
 * Auto-generated logo component: Door Exit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DoorExitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DoorExitOutlineLogo = React.forwardRef<SVGSVGElement, DoorExitOutlineLogoProps>(
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
      <path d="M13 12v.01" />
  <path d="M3 21h18" />
  <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
  <path d="M14 7h7m-3 -3l3 3l-3 3" />
    </svg>
  )
);

DoorExitOutlineLogo.displayName = "DoorExitOutlineLogo";

export const DoorExitOutlineLogoMetadata = {
  id: "door-exit-outline",
  baseId: "door-exit-outline",
  variant: "default",
  name: "Door Exit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DoorExitOutlineLogo;
