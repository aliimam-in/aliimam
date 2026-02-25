/**
 * Auto-generated logo component: Arrow Bar To Down Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarToDownDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarToDownDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarToDownDashedOutlineLogoProps>(
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
      <path d="M12 14v-10" />
  <path d="M12 14l4 -4" />
  <path d="M12 14l-4 -4" />
  <path d="M4 20h3m13 0h-3m-3.5 0h-3" />
    </svg>
  )
);

ArrowBarToDownDashedOutlineLogo.displayName = "ArrowBarToDownDashedOutlineLogo";

export const ArrowBarToDownDashedOutlineLogoMetadata = {
  id: "arrow-bar-to-down-dashed-outline",
  baseId: "arrow-bar-to-down-dashed-outline",
  variant: "default",
  name: "Arrow Bar To Down Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarToDownDashedOutlineLogo;
