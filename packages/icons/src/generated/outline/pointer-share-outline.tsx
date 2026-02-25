/**
 * Auto-generated logo component: Pointer Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerShareOutlineLogo = React.forwardRef<SVGSVGElement, PointerShareOutlineLogoProps>(
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
      <path d="M15.646 13.09l-.868 -.868l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.607 .607" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

PointerShareOutlineLogo.displayName = "PointerShareOutlineLogo";

export const PointerShareOutlineLogoMetadata = {
  id: "pointer-share-outline",
  baseId: "pointer-share-outline",
  variant: "default",
  name: "Pointer Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerShareOutlineLogo;
