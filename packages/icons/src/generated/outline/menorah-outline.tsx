/**
 * Auto-generated logo component: Menorah Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MenorahOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MenorahOutlineLogo = React.forwardRef<SVGSVGElement, MenorahOutlineLogoProps>(
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
      <path d="M12 4v16" />
  <path d="M8 4v2a4 4 0 1 0 8 0v-2" />
  <path d="M4 4v2a8 8 0 1 0 16 0v-2" />
  <path d="M10 20h4" />
    </svg>
  )
);

MenorahOutlineLogo.displayName = "MenorahOutlineLogo";

export const MenorahOutlineLogoMetadata = {
  id: "menorah-outline",
  baseId: "menorah-outline",
  variant: "default",
  name: "Menorah Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MenorahOutlineLogo;
