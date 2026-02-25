/**
 * Auto-generated logo component: Droplets Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletsFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletsFilledLogo = React.forwardRef<SVGSVGElement, DropletsFilledLogoProps>(
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
      <path d="M6 12.003c.541 0 1.045 .273 1.342 .727l2.122 3.273a3.999 3.999 0 0 1 -6.035 5.063c-1.487 -1.248 -1.864 -3.382 -.867 -5.11l2.098 -3.226a1.6 1.6 0 0 1 1.34 -.727" />
  <path d="M18 12.003c.541 0 1.045 .273 1.342 .727l2.122 3.273a3.999 3.999 0 0 1 -6.035 5.063c-1.487 -1.248 -1.864 -3.382 -.867 -5.11l2.098 -3.227a1.6 1.6 0 0 1 1.34 -.726" />
  <path d="M12 2.003c.541 0 1.045 .273 1.342 .727l2.122 3.273a3.999 3.999 0 0 1 -6.035 5.063c-1.487 -1.248 -1.864 -3.382 -.867 -5.11l2.098 -3.226a1.6 1.6 0 0 1 1.34 -.727" />
    </svg>
  )
);

DropletsFilledLogo.displayName = "DropletsFilledLogo";

export const DropletsFilledLogoMetadata = {
  id: "droplets-filled",
  baseId: "droplets-filled",
  variant: "default",
  name: "Droplets Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletsFilledLogo;
