/**
 * Auto-generated logo component: Layout (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutFilledLogo = React.forwardRef<SVGSVGElement, LayoutFilledLogoProps>(
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
      <path d="M8 3a3 3 0 0 1 3 3v1a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-1a3 3 0 0 1 3 -3z" />
  <path d="M8 12a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-3a3 3 0 0 1 3 -3z" />
  <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

LayoutFilledLogo.displayName = "LayoutFilledLogo";

export const LayoutFilledLogoMetadata = {
  id: "layout_filled",
  baseId: "layout",
  variant: "filled",
  name: "Layout",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutFilledLogo;
