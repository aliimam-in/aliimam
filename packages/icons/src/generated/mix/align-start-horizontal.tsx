/**
 * Auto-generated logo component: Align Start Horizontal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignStartHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignStartHorizontalLogo = React.forwardRef<SVGSVGElement, AlignStartHorizontalLogoProps>(
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
      <rect width="6" height="16" x="4" y="6" rx="2" />
  <rect width="6" height="9" x="14" y="6" rx="2" />
  <path d="M22 2H2" />
    </svg>
  )
);

AlignStartHorizontalLogo.displayName = "AlignStartHorizontalLogo";

export const AlignStartHorizontalLogoMetadata = {
  id: "align-start-horizontal",
  baseId: "align-start-horizontal",
  variant: "default",
  name: "Align Start Horizontal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignStartHorizontalLogo;
