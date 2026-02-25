/**
 * Auto-generated logo component: Arrow Up Tail Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpTailOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpTailOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpTailOutlineLogoProps>(
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
      <path d="M12 18l0 -15" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M15 21l-3 -3l-3 3" />
    </svg>
  )
);

ArrowUpTailOutlineLogo.displayName = "ArrowUpTailOutlineLogo";

export const ArrowUpTailOutlineLogoMetadata = {
  id: "arrow-up-tail-outline",
  baseId: "arrow-up-tail-outline",
  variant: "default",
  name: "Arrow Up Tail Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpTailOutlineLogo;
