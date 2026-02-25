/**
 * Auto-generated logo component: Lamp Wall Down (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LampWallDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LampWallDownLogo = React.forwardRef<SVGSVGElement, LampWallDownLogoProps>(
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
      <path d="M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z" />
  <path d="M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
  <path d="M8 6h4a2 2 0 0 1 2 2v5" />
    </svg>
  )
);

LampWallDownLogo.displayName = "LampWallDownLogo";

export const LampWallDownLogoMetadata = {
  id: "lamp-wall-down",
  baseId: "lamp-wall-down",
  variant: "default",
  name: "Lamp Wall Down",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LampWallDownLogo;
