/**
 * Auto-generated logo component: Hard Drive (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HardDriveLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HardDriveLogo = React.forwardRef<SVGSVGElement, HardDriveLogoProps>(
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
      <line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>
    </svg>
  )
);

HardDriveLogo.displayName = "HardDriveLogo";

export const HardDriveLogoMetadata = {
  id: "hard-drive",
  baseId: "hard-drive",
  variant: "default",
  name: "Hard Drive",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HardDriveLogo;
