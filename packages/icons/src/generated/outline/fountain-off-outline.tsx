/**
 * Auto-generated logo component: Fountain Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FountainOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FountainOffOutlineLogo = React.forwardRef<SVGSVGElement, FountainOffOutlineLogoProps>(
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
  <path d="M15 16v-1m0 -4a2 2 0 1 1 4 0" />
  <path d="M12 16v-4m0 -4v-2a3 3 0 0 1 6 0" />
  <path d="M7.451 3.43a3 3 0 0 1 4.549 2.57" />
  <path d="M20 16h1v1m-.871 3.114a2.99 2.99 0 0 1 -2.129 .886h-12a3 3 0 0 1 -3 -3v-2h13" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FountainOffOutlineLogo.displayName = "FountainOffOutlineLogo";

export const FountainOffOutlineLogoMetadata = {
  id: "fountain-off-outline",
  baseId: "fountain-off-outline",
  variant: "default",
  name: "Fountain Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FountainOffOutlineLogo;
