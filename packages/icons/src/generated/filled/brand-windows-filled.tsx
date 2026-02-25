/**
 * Auto-generated logo component: Brand Windows Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandWindowsFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandWindowsFilledLogo = React.forwardRef<SVGSVGElement, BrandWindowsFilledLogoProps>(
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
      <path d="M21 13v5c0 1.57 -1.248 2.832 -2.715 2.923l-.113 .003l-.042 .018a1 1 0 0 1 -.336 .056l-.118 -.008l-4.676 -.585v-7.407zm-10 0v7.157l-5.3 -.662c-1.514 -.151 -2.7 -1.383 -2.7 -2.895v-3.6zm0 -9.158v7.158h-8v-3.6c0 -1.454 1.096 -2.648 2.505 -2.87zm10 2.058v5.1h-8v-7.409l4.717 -.589c1.759 -.145 3.283 1.189 3.283 2.898" />
    </svg>
  )
);

BrandWindowsFilledLogo.displayName = "BrandWindowsFilledLogo";

export const BrandWindowsFilledLogoMetadata = {
  id: "brand-windows-filled",
  baseId: "brand-windows-filled",
  variant: "default",
  name: "Brand Windows Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandWindowsFilledLogo;
