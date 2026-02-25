/**
 * Auto-generated logo component: Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CheckOutlineLogo = React.forwardRef<SVGSVGElement, CheckOutlineLogoProps>(
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
      <path d="M5 12l5 5l10 -10" />
    </svg>
  )
);

CheckOutlineLogo.displayName = "CheckOutlineLogo";

export const CheckOutlineLogoMetadata = {
  id: "check-outline",
  baseId: "check-outline",
  variant: "default",
  name: "Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CheckOutlineLogo;
