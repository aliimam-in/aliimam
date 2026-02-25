/**
 * Auto-generated logo component: Rectangle Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangleVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangleVerticalOutlineLogo = React.forwardRef<SVGSVGElement, RectangleVerticalOutlineLogoProps>(
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
      <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" />
    </svg>
  )
);

RectangleVerticalOutlineLogo.displayName = "RectangleVerticalOutlineLogo";

export const RectangleVerticalOutlineLogoMetadata = {
  id: "rectangle-vertical-outline",
  baseId: "rectangle-vertical-outline",
  variant: "default",
  name: "Rectangle Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangleVerticalOutlineLogo;
