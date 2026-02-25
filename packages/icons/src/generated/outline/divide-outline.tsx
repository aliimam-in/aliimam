/**
 * Auto-generated logo component: Divide Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DivideOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DivideOutlineLogo = React.forwardRef<SVGSVGElement, DivideOutlineLogoProps>(
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
      <path d="M11 6a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="currentColor" />
  <path d="M11 18a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="currentColor" />
  <path d="M5 12l14 0" />
    </svg>
  )
);

DivideOutlineLogo.displayName = "DivideOutlineLogo";

export const DivideOutlineLogoMetadata = {
  id: "divide-outline",
  baseId: "divide-outline",
  variant: "default",
  name: "Divide Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DivideOutlineLogo;
