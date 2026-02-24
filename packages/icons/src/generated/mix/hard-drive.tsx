/**
 * Auto-generated logo component: Hard Drive (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixHardDriveLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixHardDriveLogo = React.forwardRef<SVGSVGElement, MixHardDriveLogoProps>(
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
      <path d="M10 16h.01" />
  <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  <path d="M21.946 12.013H2.054" />
  <path d="M6 16h.01" />
    </svg>
  )
);

MixHardDriveLogo.displayName = "MixHardDriveLogo";

export const MixHardDriveLogoMetadata = {
  id: "hard-drive",
  baseId: "hard-drive",
  variant: "default",
  name: "Hard Drive",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixHardDriveLogo;
