/**
 * Auto-generated logo component: Border Style Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderStyleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderStyleOutlineLogo = React.forwardRef<SVGSVGElement, BorderStyleOutlineLogoProps>(
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
      <path d="M4 20v-14a2 2 0 0 1 2 -2h14" />
  <path d="M20 8v.01" />
  <path d="M20 12v.01" />
  <path d="M20 16v.01" />
  <path d="M8 20v.01" />
  <path d="M12 20v.01" />
  <path d="M16 20v.01" />
  <path d="M20 20v.01" />
    </svg>
  )
);

BorderStyleOutlineLogo.displayName = "BorderStyleOutlineLogo";

export const BorderStyleOutlineLogoMetadata = {
  id: "border-style-outline",
  baseId: "border-style-outline",
  variant: "default",
  name: "Border Style Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderStyleOutlineLogo;
