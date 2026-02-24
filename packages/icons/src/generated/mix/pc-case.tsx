/**
 * Auto-generated logo component: Pc Case (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PcCaseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PcCaseLogo = React.forwardRef<SVGSVGElement, PcCaseLogoProps>(
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
      <rect width="14" height="20" x="5" y="2" rx="2" />
  <path d="M15 14h.01" />
  <path d="M9 6h6" />
  <path d="M9 10h6" />
    </svg>
  )
);

PcCaseLogo.displayName = "PcCaseLogo";

export const PcCaseLogoMetadata = {
  id: "pc-case",
  baseId: "pc-case",
  variant: "default",
  name: "Pc Case",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PcCaseLogo;
