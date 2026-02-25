/**
 * Auto-generated logo component: Trolley Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrolleyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrolleyOutlineLogo = React.forwardRef<SVGSVGElement, TrolleyOutlineLogoProps>(
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
      <path d="M9 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 16l3 2" />
  <path d="M12 17l8 -12" />
  <path d="M17 10l2 1" />
  <path d="M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8l-3.094 4.811a1.3 1.3 0 0 1 -1.792 .394l-3.306 -2.104a1.3 1.3 0 0 1 -.396 -1.8l3.094 -4.81a1.3 1.3 0 0 1 1.792 -.394" />
    </svg>
  )
);

TrolleyOutlineLogo.displayName = "TrolleyOutlineLogo";

export const TrolleyOutlineLogoMetadata = {
  id: "trolley-outline",
  baseId: "trolley-outline",
  variant: "default",
  name: "Trolley Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrolleyOutlineLogo;
