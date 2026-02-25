/**
 * Auto-generated logo component: Ruler Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RulerOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RulerOffOutlineLogo = React.forwardRef<SVGSVGElement, RulerOffOutlineLogoProps>(
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
      <path d="M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-4m-3.713 .299a1 1 0 0 0 -.287 .701v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14c0 -.284 .118 -.54 .308 -.722" />
  <path d="M4 8h2" />
  <path d="M4 12h3" />
  <path d="M4 16h2" />
  <path d="M12 4v3" />
  <path d="M16 4v2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RulerOffOutlineLogo.displayName = "RulerOffOutlineLogo";

export const RulerOffOutlineLogoMetadata = {
  id: "ruler-off-outline",
  baseId: "ruler-off-outline",
  variant: "default",
  name: "Ruler Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RulerOffOutlineLogo;
