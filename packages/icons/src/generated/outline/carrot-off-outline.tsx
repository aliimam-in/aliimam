/**
 * Auto-generated logo component: Carrot Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CarrotOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CarrotOffOutlineLogo = React.forwardRef<SVGSVGElement, CarrotOffOutlineLogoProps>(
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
      <path d="M8.868 8.846c-2.756 3.382 -5.868 12.154 -5.868 12.154s8.75 -3.104 12.134 -5.85m1.667 -2.342a4.486 4.486 0 0 0 -5.589 -5.615" />
  <path d="M9 13l-1.5 -1.5" />
  <path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2" />
  <path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CarrotOffOutlineLogo.displayName = "CarrotOffOutlineLogo";

export const CarrotOffOutlineLogoMetadata = {
  id: "carrot-off-outline",
  baseId: "carrot-off-outline",
  variant: "default",
  name: "Carrot Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CarrotOffOutlineLogo;
