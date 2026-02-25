/**
 * Auto-generated logo component: Sport Billard Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SportBillardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SportBillardOutlineLogo = React.forwardRef<SVGSVGElement, SportBillardOutlineLogoProps>(
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
      <path d="M10 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
    </svg>
  )
);

SportBillardOutlineLogo.displayName = "SportBillardOutlineLogo";

export const SportBillardOutlineLogoMetadata = {
  id: "sport-billard-outline",
  baseId: "sport-billard-outline",
  variant: "default",
  name: "Sport Billard Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SportBillardOutlineLogo;
