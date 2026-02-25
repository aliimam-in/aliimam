/**
 * Auto-generated logo component: Home Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeExclamationOutlineLogo = React.forwardRef<SVGSVGElement, HomeExclamationOutlineLogoProps>(
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
      <path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h8" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.857 1.257" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

HomeExclamationOutlineLogo.displayName = "HomeExclamationOutlineLogo";

export const HomeExclamationOutlineLogoMetadata = {
  id: "home-exclamation-outline",
  baseId: "home-exclamation-outline",
  variant: "default",
  name: "Home Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeExclamationOutlineLogo;
