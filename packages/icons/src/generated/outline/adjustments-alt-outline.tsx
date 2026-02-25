/**
 * Auto-generated logo component: Adjustments Alt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdjustmentsAltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AdjustmentsAltOutlineLogo = React.forwardRef<SVGSVGElement, AdjustmentsAltOutlineLogoProps>(
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
      <path d="M4 8h4v4h-4l0 -4" />
  <path d="M6 4l0 4" />
  <path d="M6 12l0 8" />
  <path d="M10 14h4v4h-4l0 -4" />
  <path d="M12 4l0 10" />
  <path d="M12 18l0 2" />
  <path d="M16 5h4v4h-4l0 -4" />
  <path d="M18 4l0 1" />
  <path d="M18 9l0 11" />
    </svg>
  )
);

AdjustmentsAltOutlineLogo.displayName = "AdjustmentsAltOutlineLogo";

export const AdjustmentsAltOutlineLogoMetadata = {
  id: "adjustments-alt-outline",
  baseId: "adjustments-alt-outline",
  variant: "default",
  name: "Adjustments Alt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AdjustmentsAltOutlineLogo;
