/**
 * Auto-generated logo component: Rotate Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RotateOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RotateOutlineLogo = React.forwardRef<SVGSVGElement, RotateOutlineLogoProps>(
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
      <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
    </svg>
  )
);

RotateOutlineLogo.displayName = "RotateOutlineLogo";

export const RotateOutlineLogoMetadata = {
  id: "rotate-outline",
  baseId: "rotate-outline",
  variant: "default",
  name: "Rotate Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RotateOutlineLogo;
