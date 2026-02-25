/**
 * Auto-generated logo component: Horse Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HorseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HorseOutlineLogo = React.forwardRef<SVGSVGElement, HorseOutlineLogoProps>(
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
      <path d="M7 10l-.85 8.507a1.357 1.357 0 0 0 1.35 1.493h.146a2 2 0 0 0 1.857 -1.257l.994 -2.486a2 2 0 0 1 1.857 -1.257h1.292a2 2 0 0 1 1.857 1.257l.994 2.486a2 2 0 0 0 1.857 1.257h.146a1.37 1.37 0 0 0 1.364 -1.494l-.864 -9.506h-8c0 -3 -3 -5 -6 -5l-3 6l2 2l3 -2" />
  <path d="M22 14v-2a3 3 0 0 0 -3 -3" />
    </svg>
  )
);

HorseOutlineLogo.displayName = "HorseOutlineLogo";

export const HorseOutlineLogoMetadata = {
  id: "horse-outline",
  baseId: "horse-outline",
  variant: "default",
  name: "Horse Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HorseOutlineLogo;
