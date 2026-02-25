/**
 * Auto-generated logo component: Building Bridge 2 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingBridge2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingBridge2FilledLogo = React.forwardRef<SVGSVGElement, BuildingBridge2FilledLogoProps>(
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
      <path d="M18 6a3 3 0 0 1 3 3v9a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2a3 3 0 0 0 -6 0v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-9a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

BuildingBridge2FilledLogo.displayName = "BuildingBridge2FilledLogo";

export const BuildingBridge2FilledLogoMetadata = {
  id: "building-bridge-2-filled",
  baseId: "building-bridge-2-filled",
  variant: "default",
  name: "Building Bridge 2 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingBridge2FilledLogo;
