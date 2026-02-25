/**
 * Auto-generated logo component: Hand Three Fingers Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HandThreeFingersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HandThreeFingersOutlineLogo = React.forwardRef<SVGSVGElement, HandThreeFingersOutlineLogoProps>(
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
      <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
  <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
  <path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5" />
  <path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5" />
    </svg>
  )
);

HandThreeFingersOutlineLogo.displayName = "HandThreeFingersOutlineLogo";

export const HandThreeFingersOutlineLogoMetadata = {
  id: "hand-three-fingers-outline",
  baseId: "hand-three-fingers-outline",
  variant: "default",
  name: "Hand Three Fingers Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HandThreeFingersOutlineLogo;
