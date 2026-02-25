/**
 * Auto-generated logo component: Pick Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PickOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PickOutlineLogo = React.forwardRef<SVGSVGElement, PickOutlineLogoProps>(
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
      <path d="M13 8l-9.383 9.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l9.407 -9.385" />
  <path d="M9 3h4.586a1 1 0 0 1 .707 .293l6.414 6.414a1 1 0 0 1 .293 .707v4.586a2 2 0 1 1 -4 0v-3l-5 -5h-3a2 2 0 1 1 0 -4" />
    </svg>
  )
);

PickOutlineLogo.displayName = "PickOutlineLogo";

export const PickOutlineLogoMetadata = {
  id: "pick-outline",
  baseId: "pick-outline",
  variant: "default",
  name: "Pick Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PickOutlineLogo;
