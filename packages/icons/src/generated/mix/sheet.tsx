/**
 * Auto-generated logo component: Sheet (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SheetLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SheetLogo = React.forwardRef<SVGSVGElement, SheetLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <line x1="3" x2="21" y1="9" y2="9" />
  <line x1="3" x2="21" y1="15" y2="15" />
  <line x1="9" x2="9" y1="9" y2="21" />
  <line x1="15" x2="15" y1="9" y2="21" />
    </svg>
  )
);

SheetLogo.displayName = "SheetLogo";

export const SheetLogoMetadata = {
  id: "sheet",
  baseId: "sheet",
  variant: "default",
  name: "Sheet",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SheetLogo;
