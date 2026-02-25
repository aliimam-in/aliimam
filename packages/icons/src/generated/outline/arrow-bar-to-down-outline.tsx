/**
 * Auto-generated logo component: Arrow Bar To Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarToDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarToDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarToDownOutlineLogoProps>(
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
      <path d="M4 20l16 0" />
  <path d="M12 14l0 -10" />
  <path d="M12 14l4 -4" />
  <path d="M12 14l-4 -4" />
    </svg>
  )
);

ArrowBarToDownOutlineLogo.displayName = "ArrowBarToDownOutlineLogo";

export const ArrowBarToDownOutlineLogoMetadata = {
  id: "arrow-bar-to-down-outline",
  baseId: "arrow-bar-to-down-outline",
  variant: "default",
  name: "Arrow Bar To Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarToDownOutlineLogo;
