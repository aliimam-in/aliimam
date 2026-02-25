/**
 * Auto-generated logo component: Circle Arrow Out Up Right (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowOutUpRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowOutUpRightLogo = React.forwardRef<SVGSVGElement, CircleArrowOutUpRightLogoProps>(
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
      <path d="M22 12A10 10 0 1 1 12 2" />
  <path d="M22 2 12 12" />
  <path d="M16 2h6v6" />
    </svg>
  )
);

CircleArrowOutUpRightLogo.displayName = "CircleArrowOutUpRightLogo";

export const CircleArrowOutUpRightLogoMetadata = {
  id: "circle-arrow-out-up-right",
  baseId: "circle-arrow-out-up-right",
  variant: "default",
  name: "Circle Arrow Out Up Right",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowOutUpRightLogo;
