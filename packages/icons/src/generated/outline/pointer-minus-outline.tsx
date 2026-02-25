/**
 * Auto-generated logo component: Pointer Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerMinusOutlineLogo = React.forwardRef<SVGSVGElement, PointerMinusOutlineLogoProps>(
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
      <path d="M17.6 15.043l-2.822 -2.821l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l1.188 1.188" />
  <path d="M16 19h6" />
    </svg>
  )
);

PointerMinusOutlineLogo.displayName = "PointerMinusOutlineLogo";

export const PointerMinusOutlineLogoMetadata = {
  id: "pointer-minus-outline",
  baseId: "pointer-minus-outline",
  variant: "default",
  name: "Pointer Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerMinusOutlineLogo;
