/**
 * Auto-generated logo component: Christmas Tree Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChristmasTreeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChristmasTreeOutlineLogo = React.forwardRef<SVGSVGElement, ChristmasTreeOutlineLogoProps>(
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
      <path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1l4 -4" />
  <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" />
    </svg>
  )
);

ChristmasTreeOutlineLogo.displayName = "ChristmasTreeOutlineLogo";

export const ChristmasTreeOutlineLogoMetadata = {
  id: "christmas-tree-outline",
  baseId: "christmas-tree-outline",
  variant: "default",
  name: "Christmas Tree Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChristmasTreeOutlineLogo;
