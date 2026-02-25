/**
 * Auto-generated logo component: Contrast Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ContrastOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ContrastOffOutlineLogo = React.forwardRef<SVGSVGElement, ContrastOffOutlineLogoProps>(
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
      <path d="M12 12v5a4.984 4.984 0 0 0 3.522 -1.45m1.392 -2.623a5 5 0 0 0 -4.914 -5.927v1" />
  <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ContrastOffOutlineLogo.displayName = "ContrastOffOutlineLogo";

export const ContrastOffOutlineLogoMetadata = {
  id: "contrast-off-outline",
  baseId: "contrast-off-outline",
  variant: "default",
  name: "Contrast Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ContrastOffOutlineLogo;
