/**
 * Auto-generated logo component: Pointer Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerPlusOutlineLogo = React.forwardRef<SVGSVGElement, PointerPlusOutlineLogoProps>(
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
      <path d="M15.941 13.385l-1.163 -1.163l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l1.23 1.23" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

PointerPlusOutlineLogo.displayName = "PointerPlusOutlineLogo";

export const PointerPlusOutlineLogoMetadata = {
  id: "pointer-plus-outline",
  baseId: "pointer-plus-outline",
  variant: "default",
  name: "Pointer Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerPlusOutlineLogo;
