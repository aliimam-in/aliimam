/**
 * Auto-generated logo component: Dual Screen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DualScreenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DualScreenOutlineLogo = React.forwardRef<SVGSVGElement, DualScreenOutlineLogoProps>(
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
      <path d="M5 4l8 3v15l-8 -3l0 -15" />
  <path d="M13 19h6v-15h-14" />
    </svg>
  )
);

DualScreenOutlineLogo.displayName = "DualScreenOutlineLogo";

export const DualScreenOutlineLogoMetadata = {
  id: "dual-screen-outline",
  baseId: "dual-screen-outline",
  variant: "default",
  name: "Dual Screen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DualScreenOutlineLogo;
