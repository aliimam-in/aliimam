/**
 * Auto-generated logo component: Magnet Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MagnetFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MagnetFilledLogo = React.forwardRef<SVGSVGElement, MagnetFilledLogoProps>(
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
      <path d="M21 9v4a9 9 0 0 1 -18 0v-4h7v4a2 2 0 1 0 4 0v-4zm-3 -7a3 3 0 0 1 3 3v2h-7v-2a3 3 0 0 1 3 -3zm-11 0a3 3 0 0 1 3 3v2h-7v-2a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

MagnetFilledLogo.displayName = "MagnetFilledLogo";

export const MagnetFilledLogoMetadata = {
  id: "magnet-filled",
  baseId: "magnet-filled",
  variant: "default",
  name: "Magnet Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MagnetFilledLogo;
