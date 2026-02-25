/**
 * Auto-generated logo component: Brand Codesandbox Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCodesandboxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCodesandboxOutlineLogo = React.forwardRef<SVGSVGElement, BrandCodesandboxOutlineLogoProps>(
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
      <path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25l4 2.25" />
  <path d="M12 12l4 -2.25l4 -2.25" />
  <path d="M12 12l0 9" />
  <path d="M12 12l-4 -2.25l-4 -2.25" />
  <path d="M20 12l-4 2v4.75" />
  <path d="M4 12l4 2l0 4.75" />
  <path d="M8 5.25l4 2.25l4 -2.25" />
    </svg>
  )
);

BrandCodesandboxOutlineLogo.displayName = "BrandCodesandboxOutlineLogo";

export const BrandCodesandboxOutlineLogoMetadata = {
  id: "brand-codesandbox-outline",
  baseId: "brand-codesandbox-outline",
  variant: "default",
  name: "Brand Codesandbox Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCodesandboxOutlineLogo;
