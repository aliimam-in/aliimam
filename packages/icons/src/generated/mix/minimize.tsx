/**
 * Auto-generated logo component: Minimize (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMinimizeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMinimizeLogo = React.forwardRef<SVGSVGElement, MixMinimizeLogoProps>(
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
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
  <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
  <path d="M3 16h3a2 2 0 0 1 2 2v3" />
  <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
);

MixMinimizeLogo.displayName = "MixMinimizeLogo";

export const MixMinimizeLogoMetadata = {
  id: "minimize",
  baseId: "minimize",
  variant: "default",
  name: "Minimize",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMinimizeLogo;
