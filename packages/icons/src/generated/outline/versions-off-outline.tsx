/**
 * Auto-generated logo component: Versions Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VersionsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VersionsOffOutlineLogo = React.forwardRef<SVGSVGElement, VersionsOffOutlineLogoProps>(
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
      <path d="M10.184 6.162a2 2 0 0 1 1.816 -1.162h6a2 2 0 0 1 2 2v9m-1.185 2.827a1.993 1.993 0 0 1 -.815 .173h-6a2 2 0 0 1 -2 -2v-7" />
  <path d="M7 7v10" />
  <path d="M4 8v8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

VersionsOffOutlineLogo.displayName = "VersionsOffOutlineLogo";

export const VersionsOffOutlineLogoMetadata = {
  id: "versions-off-outline",
  baseId: "versions-off-outline",
  variant: "default",
  name: "Versions Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VersionsOffOutlineLogo;
