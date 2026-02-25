/**
 * Auto-generated logo component: Magnetic Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MagneticOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MagneticOutlineLogo = React.forwardRef<SVGSVGElement, MagneticOutlineLogoProps>(
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
      <path d="M12 3v18" />
  <path d="M18 7c-.633 -1.255 -1.538 -2 -2.5 -2c-1.933 0 -3.5 3.134 -3.5 7s1.567 7 3.5 7s3.5 -3.134 3.5 -7v-1" />
  <path d="M6 7c.633 -1.255 1.538 -2 2.5 -2c1.933 0 3.5 3.134 3.5 7s-1.567 7 -3.5 7s-3.5 -3.134 -3.5 -7v-1" />
  <path d="M3 13l2 -2l2 2" />
  <path d="M17 13l2 -2l2 2" />
    </svg>
  )
);

MagneticOutlineLogo.displayName = "MagneticOutlineLogo";

export const MagneticOutlineLogoMetadata = {
  id: "magnetic-outline",
  baseId: "magnetic-outline",
  variant: "default",
  name: "Magnetic Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MagneticOutlineLogo;
