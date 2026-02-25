/**
 * Auto-generated logo component: Box Model 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxModel2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxModel2OutlineLogo = React.forwardRef<SVGSVGElement, BoxModel2OutlineLogoProps>(
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
    </svg>
  )
);

BoxModel2OutlineLogo.displayName = "BoxModel2OutlineLogo";

export const BoxModel2OutlineLogoMetadata = {
  id: "box-model-2-outline",
  baseId: "box-model-2-outline",
  variant: "default",
  name: "Box Model 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxModel2OutlineLogo;
