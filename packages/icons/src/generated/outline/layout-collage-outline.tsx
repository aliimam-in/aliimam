/**
 * Auto-generated logo component: Layout Collage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutCollageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutCollageOutlineLogo = React.forwardRef<SVGSVGElement, LayoutCollageOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M10 4l4 16" />
  <path d="M12 12l-8 2" />
    </svg>
  )
);

LayoutCollageOutlineLogo.displayName = "LayoutCollageOutlineLogo";

export const LayoutCollageOutlineLogoMetadata = {
  id: "layout-collage-outline",
  baseId: "layout-collage-outline",
  variant: "default",
  name: "Layout Collage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutCollageOutlineLogo;
