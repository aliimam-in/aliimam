/**
 * Auto-generated logo component: Border Corner Ios Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderCornerIosOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderCornerIosOutlineLogo = React.forwardRef<SVGSVGElement, BorderCornerIosOutlineLogoProps>(
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
      <path d="M4 20c0 -6.559 0 -9.838 1.628 -12.162a9 9 0 0 1 2.21 -2.21c2.324 -1.628 5.602 -1.628 12.162 -1.628" />
    </svg>
  )
);

BorderCornerIosOutlineLogo.displayName = "BorderCornerIosOutlineLogo";

export const BorderCornerIosOutlineLogoMetadata = {
  id: "border-corner-ios-outline",
  baseId: "border-corner-ios-outline",
  variant: "default",
  name: "Border Corner Ios Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderCornerIosOutlineLogo;
