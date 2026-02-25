/**
 * Auto-generated logo component: Circle Caret Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleCaretDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleCaretDownOutlineLogo = React.forwardRef<SVGSVGElement, CircleCaretDownOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 15l-4 -4h8l-4 4" />
    </svg>
  )
);

CircleCaretDownOutlineLogo.displayName = "CircleCaretDownOutlineLogo";

export const CircleCaretDownOutlineLogoMetadata = {
  id: "circle-caret-down-outline",
  baseId: "circle-caret-down-outline",
  variant: "default",
  name: "Circle Caret Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleCaretDownOutlineLogo;
