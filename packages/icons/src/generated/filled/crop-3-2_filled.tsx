/**
 * Auto-generated logo component: Crop 3 2 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Crop32FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Crop32FilledLogo = React.forwardRef<SVGSVGElement, Crop32FilledLogoProps>(
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
      <path d="M18 6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

Crop32FilledLogo.displayName = "Crop32FilledLogo";

export const Crop32FilledLogoMetadata = {
  id: "crop-3-2_filled",
  baseId: "crop-3-2",
  variant: "filled",
  name: "Crop 3 2",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Crop32FilledLogo;
