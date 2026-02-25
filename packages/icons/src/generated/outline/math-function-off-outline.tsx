/**
 * Auto-generated logo component: Math Function Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathFunctionOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathFunctionOffOutlineLogo = React.forwardRef<SVGSVGElement, MathFunctionOffOutlineLogoProps>(
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
      <path d="M14 10h1c.882 0 .986 .777 1.694 2.692" />
  <path d="M13 17c.864 0 1.727 -.663 2.495 -1.512m1.717 -2.302c.993 -1.45 2.39 -3.186 3.788 -3.186" />
  <path d="M3 19c0 1.5 .5 2 2 2s2 -4 3 -9c.237 -1.186 .446 -2.317 .647 -3.35m.727 -3.248c.423 -1.492 .91 -2.402 1.626 -2.402c1.5 0 2 .5 2 2" />
  <path d="M5 12h6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MathFunctionOffOutlineLogo.displayName = "MathFunctionOffOutlineLogo";

export const MathFunctionOffOutlineLogoMetadata = {
  id: "math-function-off-outline",
  baseId: "math-function-off-outline",
  variant: "default",
  name: "Math Function Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathFunctionOffOutlineLogo;
