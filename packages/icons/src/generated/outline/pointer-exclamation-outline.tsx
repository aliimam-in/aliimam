/**
 * Auto-generated logo component: Pointer Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerExclamationOutlineLogo = React.forwardRef<SVGSVGElement, PointerExclamationOutlineLogoProps>(
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
      <path d="M15.97 13.414l-1.192 -1.192l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l2.778 2.778" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

PointerExclamationOutlineLogo.displayName = "PointerExclamationOutlineLogo";

export const PointerExclamationOutlineLogoMetadata = {
  id: "pointer-exclamation-outline",
  baseId: "pointer-exclamation-outline",
  variant: "default",
  name: "Pointer Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerExclamationOutlineLogo;
