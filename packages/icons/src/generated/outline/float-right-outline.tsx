/**
 * Auto-generated logo component: Float Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FloatRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FloatRightOutlineLogo = React.forwardRef<SVGSVGElement, FloatRightOutlineLogoProps>(
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
      <path d="M14 6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M4 7l6 0" />
  <path d="M4 11l6 0" />
  <path d="M4 15l16 0" />
  <path d="M4 19l16 0" />
    </svg>
  )
);

FloatRightOutlineLogo.displayName = "FloatRightOutlineLogo";

export const FloatRightOutlineLogoMetadata = {
  id: "float-right-outline",
  baseId: "float-right-outline",
  variant: "default",
  name: "Float Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FloatRightOutlineLogo;
