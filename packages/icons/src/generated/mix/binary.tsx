/**
 * Auto-generated logo component: Binary (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BinaryLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BinaryLogo = React.forwardRef<SVGSVGElement, BinaryLogoProps>(
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
      <rect x="14" y="14" width="4" height="6" rx="2" />
  <rect x="6" y="4" width="4" height="6" rx="2" />
  <path d="M6 20h4" />
  <path d="M14 10h4" />
  <path d="M6 14h2v6" />
  <path d="M14 4h2v6" />
    </svg>
  )
);

BinaryLogo.displayName = "BinaryLogo";

export const BinaryLogoMetadata = {
  id: "binary",
  baseId: "binary",
  variant: "default",
  name: "Binary",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BinaryLogo;
