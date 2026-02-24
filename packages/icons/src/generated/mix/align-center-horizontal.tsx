/**
 * Auto-generated logo component: Align Center Horizontal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignCenterHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignCenterHorizontalLogo = React.forwardRef<SVGSVGElement, AlignCenterHorizontalLogoProps>(
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
      <path d="M2 12h20" />
  <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
  <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
  <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
  <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
    </svg>
  )
);

AlignCenterHorizontalLogo.displayName = "AlignCenterHorizontalLogo";

export const AlignCenterHorizontalLogoMetadata = {
  id: "align-center-horizontal",
  baseId: "align-center-horizontal",
  variant: "default",
  name: "Align Center Horizontal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignCenterHorizontalLogo;
