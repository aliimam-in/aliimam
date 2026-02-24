/**
 * Auto-generated logo component: Shelving Unit (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShelvingUnitLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShelvingUnitLogo = React.forwardRef<SVGSVGElement, ShelvingUnitLogoProps>(
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
      <path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  <path d="M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
  <path d="M20 22V2" />
  <path d="M4 12h16" />
  <path d="M4 20h16" />
  <path d="M4 2v20" />
  <path d="M4 4h16" />
    </svg>
  )
);

ShelvingUnitLogo.displayName = "ShelvingUnitLogo";

export const ShelvingUnitLogoMetadata = {
  id: "shelving-unit",
  baseId: "shelving-unit",
  variant: "default",
  name: "Shelving Unit",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShelvingUnitLogo;
