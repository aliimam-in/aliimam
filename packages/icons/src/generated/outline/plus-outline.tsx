/**
 * Auto-generated logo component: Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlusOutlineLogo = React.forwardRef<SVGSVGElement, PlusOutlineLogoProps>(
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
      <path d="M12 5l0 14" />
  <path d="M5 12l14 0" />
    </svg>
  )
);

PlusOutlineLogo.displayName = "PlusOutlineLogo";

export const PlusOutlineLogoMetadata = {
  id: "plus-outline",
  baseId: "plus-outline",
  variant: "default",
  name: "Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlusOutlineLogo;
