/**
 * Auto-generated logo component: Box Model Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxModelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxModelOutlineLogo = React.forwardRef<SVGSVGElement, BoxModelOutlineLogoProps>(
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
      <path d="M8 8h8v8h-8l0 -8" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M16 16l3.3 3.3" />
  <path d="M16 8l3.3 -3.3" />
  <path d="M8 8l-3.3 -3.3" />
  <path d="M8 16l-3.3 3.3" />
    </svg>
  )
);

BoxModelOutlineLogo.displayName = "BoxModelOutlineLogo";

export const BoxModelOutlineLogoMetadata = {
  id: "box-model-outline",
  baseId: "box-model-outline",
  variant: "default",
  name: "Box Model Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxModelOutlineLogo;
