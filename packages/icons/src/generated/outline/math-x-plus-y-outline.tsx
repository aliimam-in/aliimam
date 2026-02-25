/**
 * Auto-generated logo component: Math X Plus Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathXPlusYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathXPlusYOutlineLogo = React.forwardRef<SVGSVGElement, MathXPlusYOutlineLogoProps>(
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
      <path d="M16 9l3 5.063" />
  <path d="M2 9l6 6" />
  <path d="M2 15l6 -6" />
  <path d="M22 9l-4.8 9" />
  <path d="M10 12h4" />
  <path d="M12 10v4" />
    </svg>
  )
);

MathXPlusYOutlineLogo.displayName = "MathXPlusYOutlineLogo";

export const MathXPlusYOutlineLogoMetadata = {
  id: "math-x-plus-y-outline",
  baseId: "math-x-plus-y-outline",
  variant: "default",
  name: "Math X Plus Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathXPlusYOutlineLogo;
