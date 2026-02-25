/**
 * Auto-generated logo component: Math Y Plus Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathYPlusYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathYPlusYOutlineLogo = React.forwardRef<SVGSVGElement, MathYPlusYOutlineLogoProps>(
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
      <path d="M2 9l3 5.063" />
  <path d="M8 9l-4.8 9" />
  <path d="M16 9l3 5.063" />
  <path d="M22 9l-4.8 9" />
  <path d="M10 12h4" />
  <path d="M12 10v4" />
    </svg>
  )
);

MathYPlusYOutlineLogo.displayName = "MathYPlusYOutlineLogo";

export const MathYPlusYOutlineLogoMetadata = {
  id: "math-y-plus-y-outline",
  baseId: "math-y-plus-y-outline",
  variant: "default",
  name: "Math Y Plus Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathYPlusYOutlineLogo;
