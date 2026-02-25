/**
 * Auto-generated logo component: Backslash Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BackslashOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BackslashOutlineLogo = React.forwardRef<SVGSVGElement, BackslashOutlineLogoProps>(
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
      <path d="M7 5l10 14" />
    </svg>
  )
);

BackslashOutlineLogo.displayName = "BackslashOutlineLogo";

export const BackslashOutlineLogoMetadata = {
  id: "backslash-outline",
  baseId: "backslash-outline",
  variant: "default",
  name: "Backslash Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BackslashOutlineLogo;
