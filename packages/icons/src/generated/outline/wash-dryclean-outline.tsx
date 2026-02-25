/**
 * Auto-generated logo component: Wash Dryclean Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashDrycleanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashDrycleanOutlineLogo = React.forwardRef<SVGSVGElement, WashDrycleanOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

WashDrycleanOutlineLogo.displayName = "WashDrycleanOutlineLogo";

export const WashDrycleanOutlineLogoMetadata = {
  id: "wash-dryclean-outline",
  baseId: "wash-dryclean-outline",
  variant: "default",
  name: "Wash Dryclean Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashDrycleanOutlineLogo;
