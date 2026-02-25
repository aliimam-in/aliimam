/**
 * Auto-generated logo component: Contrast Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ContrastOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ContrastOutlineLogo = React.forwardRef<SVGSVGElement, ContrastOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 17a5 5 0 0 0 0 -10v10" />
    </svg>
  )
);

ContrastOutlineLogo.displayName = "ContrastOutlineLogo";

export const ContrastOutlineLogoMetadata = {
  id: "contrast-outline",
  baseId: "contrast-outline",
  variant: "default",
  name: "Contrast Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ContrastOutlineLogo;
