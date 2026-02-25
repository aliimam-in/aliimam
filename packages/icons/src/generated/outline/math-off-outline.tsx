/**
 * Auto-generated logo component: Math Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathOffOutlineLogo = React.forwardRef<SVGSVGElement, MathOffOutlineLogoProps>(
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
      <path d="M14 19l2.5 -2.5" />
  <path d="M18.5 14.5l1.5 -1.5" />
  <path d="M3 3l18 18" />
  <path d="M19 5h-7l-.646 2.262" />
  <path d="M10.448 10.431l-2.448 8.569l-3 -6h-2" />
    </svg>
  )
);

MathOffOutlineLogo.displayName = "MathOffOutlineLogo";

export const MathOffOutlineLogoMetadata = {
  id: "math-off-outline",
  baseId: "math-off-outline",
  variant: "default",
  name: "Math Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathOffOutlineLogo;
