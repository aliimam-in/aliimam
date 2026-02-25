/**
 * Auto-generated logo component: Cross Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrossOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CrossOutlineLogo = React.forwardRef<SVGSVGElement, CrossOutlineLogoProps>(
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
      <path d="M10 21h4v-9h5v-4h-5v-5h-4v5h-5v4h5l0 9" />
    </svg>
  )
);

CrossOutlineLogo.displayName = "CrossOutlineLogo";

export const CrossOutlineLogoMetadata = {
  id: "cross-outline",
  baseId: "cross-outline",
  variant: "default",
  name: "Cross Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CrossOutlineLogo;
