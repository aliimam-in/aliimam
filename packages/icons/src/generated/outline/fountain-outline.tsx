/**
 * Auto-generated logo component: Fountain Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FountainOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FountainOutlineLogo = React.forwardRef<SVGSVGElement, FountainOutlineLogoProps>(
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
      <path d="M9 16v-5a2 2 0 1 0 -4 0" />
  <path d="M15 16v-5a2 2 0 1 1 4 0" />
  <path d="M12 16v-10a3 3 0 0 1 6 0" />
  <path d="M6 6a3 3 0 0 1 6 0" />
  <path d="M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2" />
    </svg>
  )
);

FountainOutlineLogo.displayName = "FountainOutlineLogo";

export const FountainOutlineLogoMetadata = {
  id: "fountain-outline",
  baseId: "fountain-outline",
  variant: "default",
  name: "Fountain Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FountainOutlineLogo;
