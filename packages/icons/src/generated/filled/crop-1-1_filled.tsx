/**
 * Auto-generated logo component: Crop 1 1 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Crop11FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Crop11FilledLogo = React.forwardRef<SVGSVGElement, Crop11FilledLogoProps>(
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
      <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

Crop11FilledLogo.displayName = "Crop11FilledLogo";

export const Crop11FilledLogoMetadata = {
  id: "crop-1-1_filled",
  baseId: "crop-1-1",
  variant: "filled",
  name: "Crop 1 1",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Crop11FilledLogo;
