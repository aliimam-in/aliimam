/**
 * Auto-generated logo component: Eraser Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EraserOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EraserOutlineLogo = React.forwardRef<SVGSVGElement, EraserOutlineLogoProps>(
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
      <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" />
  <path d="M18 13.3l-6.3 -6.3" />
    </svg>
  )
);

EraserOutlineLogo.displayName = "EraserOutlineLogo";

export const EraserOutlineLogoMetadata = {
  id: "eraser-outline",
  baseId: "eraser-outline",
  variant: "default",
  name: "Eraser Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EraserOutlineLogo;
