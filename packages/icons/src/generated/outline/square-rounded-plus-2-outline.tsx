/**
 * Auto-generated logo component: Square Rounded Plus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedPlus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedPlus2OutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedPlus2OutlineLogoProps>(
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
      <path d="M12.54 20.996c-.176 .004 -.356 .004 -.54 .004c-7.2 0 -9 -1.8 -9 -9s1.8 -9 9 -9s9 1.8 9 9c0 .185 -.001 .366 -.004 .544" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

SquareRoundedPlus2OutlineLogo.displayName = "SquareRoundedPlus2OutlineLogo";

export const SquareRoundedPlus2OutlineLogoMetadata = {
  id: "square-rounded-plus-2-outline",
  baseId: "square-rounded-plus-2-outline",
  variant: "default",
  name: "Square Rounded Plus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedPlus2OutlineLogo;
