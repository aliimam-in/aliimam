/**
 * Auto-generated logo component: Peace Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PeaceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PeaceOutlineLogo = React.forwardRef<SVGSVGElement, PeaceOutlineLogoProps>(
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
  <path d="M12 3l0 18" />
  <path d="M12 12l6.3 6.3" />
  <path d="M12 12l-6.3 6.3" />
    </svg>
  )
);

PeaceOutlineLogo.displayName = "PeaceOutlineLogo";

export const PeaceOutlineLogoMetadata = {
  id: "peace-outline",
  baseId: "peace-outline",
  variant: "default",
  name: "Peace Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PeaceOutlineLogo;
