/**
 * Auto-generated logo component: Circle Chevron Left Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronLeftFilledLogo = React.forwardRef<SVGSVGElement, CircleChevronLeftFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 0 1 5 8.66c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10a10 10 0 0 1 15 -8.66m-3.293 4.953a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293a1 1 0 0 0 0 -1.414" />
    </svg>
  )
);

CircleChevronLeftFilledLogo.displayName = "CircleChevronLeftFilledLogo";

export const CircleChevronLeftFilledLogoMetadata = {
  id: "circle-chevron-left-filled",
  baseId: "circle-chevron-left-filled",
  variant: "default",
  name: "Circle Chevron Left Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronLeftFilledLogo;
