/**
 * Auto-generated logo component: Plus Square (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlusSquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlusSquareLogo = React.forwardRef<SVGSVGElement, PlusSquareLogoProps>(
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  )
);

PlusSquareLogo.displayName = "PlusSquareLogo";

export const PlusSquareLogoMetadata = {
  id: "plus-square",
  baseId: "plus-square",
  variant: "default",
  name: "Plus Square",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlusSquareLogo;
