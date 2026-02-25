/**
 * Auto-generated logo component: Rectangle Rounded Top Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangleRoundedTopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangleRoundedTopOutlineLogo = React.forwardRef<SVGSVGElement, RectangleRoundedTopOutlineLogoProps>(
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
      <path d="M9 6h6a6 6 0 0 1 6 6v5a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-5a6 6 0 0 1 6 -6" />
    </svg>
  )
);

RectangleRoundedTopOutlineLogo.displayName = "RectangleRoundedTopOutlineLogo";

export const RectangleRoundedTopOutlineLogoMetadata = {
  id: "rectangle-rounded-top-outline",
  baseId: "rectangle-rounded-top-outline",
  variant: "default",
  name: "Rectangle Rounded Top Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangleRoundedTopOutlineLogo;
