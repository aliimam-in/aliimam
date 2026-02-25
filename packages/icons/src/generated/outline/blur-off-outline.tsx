/**
 * Auto-generated logo component: Blur Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlurOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlurOffOutlineLogo = React.forwardRef<SVGSVGElement, BlurOffOutlineLogoProps>(
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
      <path d="M12 3v5m0 4v8" />
  <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
  <path d="M16 12h5" />
  <path d="M13 9h7" />
  <path d="M12 6h6" />
  <path d="M12 18h6" />
  <path d="M12 15h3m4 0h1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BlurOffOutlineLogo.displayName = "BlurOffOutlineLogo";

export const BlurOffOutlineLogoMetadata = {
  id: "blur-off-outline",
  baseId: "blur-off-outline",
  variant: "default",
  name: "Blur Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlurOffOutlineLogo;
