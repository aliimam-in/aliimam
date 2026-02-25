/**
 * Auto-generated logo component: Rectangle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangleOutlineLogo = React.forwardRef<SVGSVGElement, RectangleOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
    </svg>
  )
);

RectangleOutlineLogo.displayName = "RectangleOutlineLogo";

export const RectangleOutlineLogoMetadata = {
  id: "rectangle-outline",
  baseId: "rectangle-outline",
  variant: "default",
  name: "Rectangle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangleOutlineLogo;
