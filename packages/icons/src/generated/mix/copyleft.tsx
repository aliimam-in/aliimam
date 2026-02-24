/**
 * Auto-generated logo component: Copyleft (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CopyleftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CopyleftLogo = React.forwardRef<SVGSVGElement, CopyleftLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M9.17 14.83a4 4 0 1 0 0-5.66" />
    </svg>
  )
);

CopyleftLogo.displayName = "CopyleftLogo";

export const CopyleftLogoMetadata = {
  id: "copyleft",
  baseId: "copyleft",
  variant: "default",
  name: "Copyleft",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CopyleftLogo;
