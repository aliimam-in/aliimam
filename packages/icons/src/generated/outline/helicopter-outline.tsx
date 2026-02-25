/**
 * Auto-generated logo component: Helicopter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HelicopterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HelicopterOutlineLogo = React.forwardRef<SVGSVGElement, HelicopterOutlineLogoProps>(
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
      <path d="M3 10l1 2h6" />
  <path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2" />
  <path d="M13 9l0 -3" />
  <path d="M5 6l15 0" />
  <path d="M15 9.1v3.9h5.5" />
  <path d="M15 19l0 -3" />
  <path d="M19 19l-8 0" />
    </svg>
  )
);

HelicopterOutlineLogo.displayName = "HelicopterOutlineLogo";

export const HelicopterOutlineLogoMetadata = {
  id: "helicopter-outline",
  baseId: "helicopter-outline",
  variant: "default",
  name: "Helicopter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HelicopterOutlineLogo;
