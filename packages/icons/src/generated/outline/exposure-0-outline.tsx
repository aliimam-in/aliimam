/**
 * Auto-generated logo component: Exposure 0 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Exposure0OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Exposure0OutlineLogo = React.forwardRef<SVGSVGElement, Exposure0OutlineLogoProps>(
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
      <path d="M12 19a4 4 0 0 0 4 -4v-6a4 4 0 1 0 -8 0v6a4 4 0 0 0 4 4" />
    </svg>
  )
);

Exposure0OutlineLogo.displayName = "Exposure0OutlineLogo";

export const Exposure0OutlineLogoMetadata = {
  id: "exposure-0-outline",
  baseId: "exposure-0-outline",
  variant: "default",
  name: "Exposure 0 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Exposure0OutlineLogo;
