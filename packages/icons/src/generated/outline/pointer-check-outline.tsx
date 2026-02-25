/**
 * Auto-generated logo component: Pointer Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerCheckOutlineLogo = React.forwardRef<SVGSVGElement, PointerCheckOutlineLogoProps>(
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
      <path d="M17.487 14.93l-2.709 -2.708l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.785 .785" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

PointerCheckOutlineLogo.displayName = "PointerCheckOutlineLogo";

export const PointerCheckOutlineLogoMetadata = {
  id: "pointer-check-outline",
  baseId: "pointer-check-outline",
  variant: "default",
  name: "Pointer Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerCheckOutlineLogo;
