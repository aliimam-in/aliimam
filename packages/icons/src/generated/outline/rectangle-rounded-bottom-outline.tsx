/**
 * Auto-generated logo component: Rectangle Rounded Bottom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangleRoundedBottomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangleRoundedBottomOutlineLogo = React.forwardRef<SVGSVGElement, RectangleRoundedBottomOutlineLogoProps>(
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
      <path d="M9 18h6a6 6 0 0 0 6 -6v-5a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1v5a6 6 0 0 0 6 6" />
    </svg>
  )
);

RectangleRoundedBottomOutlineLogo.displayName = "RectangleRoundedBottomOutlineLogo";

export const RectangleRoundedBottomOutlineLogoMetadata = {
  id: "rectangle-rounded-bottom-outline",
  baseId: "rectangle-rounded-bottom-outline",
  variant: "default",
  name: "Rectangle Rounded Bottom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangleRoundedBottomOutlineLogo;
