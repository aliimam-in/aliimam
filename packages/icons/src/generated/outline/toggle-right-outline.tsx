/**
 * Auto-generated logo component: Toggle Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToggleRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToggleRightOutlineLogo = React.forwardRef<SVGSVGElement, ToggleRightOutlineLogoProps>(
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
      <path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6" />
    </svg>
  )
);

ToggleRightOutlineLogo.displayName = "ToggleRightOutlineLogo";

export const ToggleRightOutlineLogoMetadata = {
  id: "toggle-right-outline",
  baseId: "toggle-right-outline",
  variant: "default",
  name: "Toggle Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToggleRightOutlineLogo;
