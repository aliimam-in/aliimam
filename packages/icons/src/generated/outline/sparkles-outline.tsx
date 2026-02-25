/**
 * Auto-generated logo component: Sparkles Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SparklesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SparklesOutlineLogo = React.forwardRef<SVGSVGElement, SparklesOutlineLogoProps>(
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
      <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />
    </svg>
  )
);

SparklesOutlineLogo.displayName = "SparklesOutlineLogo";

export const SparklesOutlineLogoMetadata = {
  id: "sparkles-outline",
  baseId: "sparkles-outline",
  variant: "default",
  name: "Sparkles Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SparklesOutlineLogo;
