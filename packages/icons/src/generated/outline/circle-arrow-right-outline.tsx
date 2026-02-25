/**
 * Auto-generated logo component: Circle Arrow Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowRightOutlineLogo = React.forwardRef<SVGSVGElement, CircleArrowRightOutlineLogoProps>(
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
      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
  <path d="M16 12l-4 -4" />
  <path d="M16 12h-8" />
  <path d="M12 16l4 -4" />
    </svg>
  )
);

CircleArrowRightOutlineLogo.displayName = "CircleArrowRightOutlineLogo";

export const CircleArrowRightOutlineLogoMetadata = {
  id: "circle-arrow-right-outline",
  baseId: "circle-arrow-right-outline",
  variant: "default",
  name: "Circle Arrow Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowRightOutlineLogo;
