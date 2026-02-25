/**
 * Auto-generated logo component: Versions Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VersionsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VersionsOutlineLogo = React.forwardRef<SVGSVGElement, VersionsOutlineLogoProps>(
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
      <path d="M10 7a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -10" />
  <path d="M7 7l0 10" />
  <path d="M4 8l0 8" />
    </svg>
  )
);

VersionsOutlineLogo.displayName = "VersionsOutlineLogo";

export const VersionsOutlineLogoMetadata = {
  id: "versions-outline",
  baseId: "versions-outline",
  variant: "default",
  name: "Versions Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VersionsOutlineLogo;
