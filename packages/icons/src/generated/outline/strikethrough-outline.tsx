/**
 * Auto-generated logo component: Strikethrough Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StrikethroughOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StrikethroughOutlineLogo = React.forwardRef<SVGSVGElement, StrikethroughOutlineLogoProps>(
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
      <path d="M5 12l14 0" />
  <path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5" />
    </svg>
  )
);

StrikethroughOutlineLogo.displayName = "StrikethroughOutlineLogo";

export const StrikethroughOutlineLogoMetadata = {
  id: "strikethrough-outline",
  baseId: "strikethrough-outline",
  variant: "default",
  name: "Strikethrough Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StrikethroughOutlineLogo;
