/**
 * Auto-generated logo component: Meter Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MeterSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MeterSquareOutlineLogo = React.forwardRef<SVGSVGElement, MeterSquareOutlineLogoProps>(
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
      <path d="M17 5h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
  <path d="M4 12v6" />
  <path d="M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5" />
  <path d="M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5" />
    </svg>
  )
);

MeterSquareOutlineLogo.displayName = "MeterSquareOutlineLogo";

export const MeterSquareOutlineLogoMetadata = {
  id: "meter-square-outline",
  baseId: "meter-square-outline",
  variant: "default",
  name: "Meter Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MeterSquareOutlineLogo;
