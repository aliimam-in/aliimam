/**
 * Auto-generated logo component: Border Top Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderTopPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderTopPlusOutlineLogo = React.forwardRef<SVGSVGElement, BorderTopPlusOutlineLogoProps>(
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
      <path d="M4 4h16" />
  <path d="M4 8v.01" />
  <path d="M20 8v.01" />
  <path d="M4 12v.01" />
  <path d="M20 12v.01" />
  <path d="M4 16v.01" />
  <path d="M15 12h-6" />
  <path d="M12 9v6" />
  <path d="M20 16v.01" />
  <path d="M4 20v.01" />
  <path d="M8 20v.01" />
  <path d="M12 20v.01" />
  <path d="M16 20v.01" />
  <path d="M20 20v.01" />
    </svg>
  )
);

BorderTopPlusOutlineLogo.displayName = "BorderTopPlusOutlineLogo";

export const BorderTopPlusOutlineLogoMetadata = {
  id: "border-top-plus-outline",
  baseId: "border-top-plus-outline",
  variant: "default",
  name: "Border Top Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderTopPlusOutlineLogo;
