/**
 * Auto-generated logo component: Infinity Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InfinityOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InfinityOutlineLogo = React.forwardRef<SVGSVGElement, InfinityOutlineLogoProps>(
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
      <path d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828" />
    </svg>
  )
);

InfinityOutlineLogo.displayName = "InfinityOutlineLogo";

export const InfinityOutlineLogoMetadata = {
  id: "infinity-outline",
  baseId: "infinity-outline",
  variant: "default",
  name: "Infinity Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InfinityOutlineLogo;
