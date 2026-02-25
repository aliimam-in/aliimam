/**
 * Auto-generated logo component: Rectangle Circle (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangleCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangleCircleLogo = React.forwardRef<SVGSVGElement, RectangleCircleLogoProps>(
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
      <path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
  <circle cx="14" cy="12" r="8" />
    </svg>
  )
);

RectangleCircleLogo.displayName = "RectangleCircleLogo";

export const RectangleCircleLogoMetadata = {
  id: "rectangle-circle",
  baseId: "rectangle-circle",
  variant: "default",
  name: "Rectangle Circle",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangleCircleLogo;
