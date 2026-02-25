/**
 * Auto-generated logo component: Crop 16 9 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Crop169FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Crop169FilledLogo = React.forwardRef<SVGSVGElement, Crop169FilledLogoProps>(
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
      <path d="M18 7a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-4a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

Crop169FilledLogo.displayName = "Crop169FilledLogo";

export const Crop169FilledLogoMetadata = {
  id: "crop-16-9-filled",
  baseId: "crop-16-9-filled",
  variant: "default",
  name: "Crop 16 9 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Crop169FilledLogo;
