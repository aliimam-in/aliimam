/**
 * Auto-generated logo component: Adjustments Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdjustmentsPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AdjustmentsPlusOutlineLogo = React.forwardRef<SVGSVGElement, AdjustmentsPlusOutlineLogoProps>(
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
      <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M6 4v4" />
  <path d="M6 12v8" />
  <path d="M13.958 15.592a2 2 0 1 0 -1.958 2.408" />
  <path d="M12 4v10" />
  <path d="M12 18v2" />
  <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M18 4v1" />
  <path d="M18 9v3" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

AdjustmentsPlusOutlineLogo.displayName = "AdjustmentsPlusOutlineLogo";

export const AdjustmentsPlusOutlineLogoMetadata = {
  id: "adjustments-plus-outline",
  baseId: "adjustments-plus-outline",
  variant: "default",
  name: "Adjustments Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AdjustmentsPlusOutlineLogo;
