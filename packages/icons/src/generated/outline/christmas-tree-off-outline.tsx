/**
 * Auto-generated logo component: Christmas Tree Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChristmasTreeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChristmasTreeOffOutlineLogo = React.forwardRef<SVGSVGElement, ChristmasTreeOffOutlineLogoProps>(
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
      <path d="M9.5 5.5l2.5 -2.5l4 4l-2 1l4 4l-1.5 .5m.5 4.5h-12l4 -4l-3 -1l3 -3" />
  <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ChristmasTreeOffOutlineLogo.displayName = "ChristmasTreeOffOutlineLogo";

export const ChristmasTreeOffOutlineLogoMetadata = {
  id: "christmas-tree-off-outline",
  baseId: "christmas-tree-off-outline",
  variant: "default",
  name: "Christmas Tree Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChristmasTreeOffOutlineLogo;
