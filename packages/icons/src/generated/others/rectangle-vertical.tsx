/**
 * Auto-generated logo component: Rectangle Vertical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangleVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangleVerticalLogo = React.forwardRef<SVGSVGElement, RectangleVerticalLogoProps>(
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
      <rect width="12" height="20" x="6" y="2" rx="2" />
    </svg>
  )
);

RectangleVerticalLogo.displayName = "RectangleVerticalLogo";

export const RectangleVerticalLogoMetadata = {
  id: "rectangle-vertical",
  baseId: "rectangle-vertical",
  variant: "default",
  name: "Rectangle Vertical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangleVerticalLogo;
