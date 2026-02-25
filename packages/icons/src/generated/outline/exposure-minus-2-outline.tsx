/**
 * Auto-generated logo component: Exposure Minus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExposureMinus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExposureMinus2OutlineLogo = React.forwardRef<SVGSVGElement, ExposureMinus2OutlineLogoProps>(
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
      <path d="M12 9a4 4 0 1 1 8 0c0 1.098 -.564 2.025 -1.159 2.815l-6.841 7.185h8" />
  <path d="M3 12h6" />
    </svg>
  )
);

ExposureMinus2OutlineLogo.displayName = "ExposureMinus2OutlineLogo";

export const ExposureMinus2OutlineLogoMetadata = {
  id: "exposure-minus-2-outline",
  baseId: "exposure-minus-2-outline",
  variant: "default",
  name: "Exposure Minus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExposureMinus2OutlineLogo;
