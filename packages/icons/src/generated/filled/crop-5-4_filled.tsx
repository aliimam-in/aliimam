/**
 * Auto-generated logo component: Crop 5 4 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Crop54FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Crop54FilledLogo = React.forwardRef<SVGSVGElement, Crop54FilledLogoProps>(
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
      <path d="M18 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

Crop54FilledLogo.displayName = "Crop54FilledLogo";

export const Crop54FilledLogoMetadata = {
  id: "crop-5-4_filled",
  baseId: "crop-5-4",
  variant: "filled",
  name: "Crop 5 4",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Crop54FilledLogo;
