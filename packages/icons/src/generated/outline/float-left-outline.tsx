/**
 * Auto-generated logo component: Float Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FloatLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FloatLeftOutlineLogo = React.forwardRef<SVGSVGElement, FloatLeftOutlineLogoProps>(
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
      <path d="M4 6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M14 7l6 0" />
  <path d="M14 11l6 0" />
  <path d="M4 15l16 0" />
  <path d="M4 19l16 0" />
    </svg>
  )
);

FloatLeftOutlineLogo.displayName = "FloatLeftOutlineLogo";

export const FloatLeftOutlineLogoMetadata = {
  id: "float-left-outline",
  baseId: "float-left-outline",
  variant: "default",
  name: "Float Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FloatLeftOutlineLogo;
