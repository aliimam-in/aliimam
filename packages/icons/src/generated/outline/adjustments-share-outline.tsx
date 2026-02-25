/**
 * Auto-generated logo component: Adjustments Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdjustmentsShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AdjustmentsShareOutlineLogo = React.forwardRef<SVGSVGElement, AdjustmentsShareOutlineLogoProps>(
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
  <path d="M13.387 14.56a2 2 0 1 0 -.798 3.352" />
  <path d="M12 4v10" />
  <path d="M12 18v2" />
  <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M18 4v1" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
  <path d="M18 9v4" />
    </svg>
  )
);

AdjustmentsShareOutlineLogo.displayName = "AdjustmentsShareOutlineLogo";

export const AdjustmentsShareOutlineLogoMetadata = {
  id: "adjustments-share-outline",
  baseId: "adjustments-share-outline",
  variant: "default",
  name: "Adjustments Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AdjustmentsShareOutlineLogo;
