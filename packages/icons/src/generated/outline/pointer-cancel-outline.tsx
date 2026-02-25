/**
 * Auto-generated logo component: Pointer Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerCancelOutlineLogo = React.forwardRef<SVGSVGElement, PointerCancelOutlineLogoProps>(
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
      <path d="M15.526 12.97l-.748 -.748l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.714 .714" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
    </svg>
  )
);

PointerCancelOutlineLogo.displayName = "PointerCancelOutlineLogo";

export const PointerCancelOutlineLogoMetadata = {
  id: "pointer-cancel-outline",
  baseId: "pointer-cancel-outline",
  variant: "default",
  name: "Pointer Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerCancelOutlineLogo;
