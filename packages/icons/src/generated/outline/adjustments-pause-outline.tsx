/**
 * Auto-generated logo component: Adjustments Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdjustmentsPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AdjustmentsPauseOutlineLogo = React.forwardRef<SVGSVGElement, AdjustmentsPauseOutlineLogoProps>(
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
  <path d="M13.627 14.836a2 2 0 1 0 -.62 2.892" />
  <path d="M12 4v10" />
  <path d="M12 18v2" />
  <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M18 4v1" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
  <path d="M18 9v4.5" />
    </svg>
  )
);

AdjustmentsPauseOutlineLogo.displayName = "AdjustmentsPauseOutlineLogo";

export const AdjustmentsPauseOutlineLogoMetadata = {
  id: "adjustments-pause-outline",
  baseId: "adjustments-pause-outline",
  variant: "default",
  name: "Adjustments Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AdjustmentsPauseOutlineLogo;
