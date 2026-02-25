/**
 * Auto-generated logo component: Percentage 60 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage60OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage60OutlineLogo = React.forwardRef<SVGSVGElement, Percentage60OutlineLogoProps>(
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
      <path d="M12 3a9 9 0 1 1 -5.162 16.373l5.162 -7.373v-9" fill="currentColor" stroke="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage60OutlineLogo.displayName = "Percentage60OutlineLogo";

export const Percentage60OutlineLogoMetadata = {
  id: "percentage-60-outline",
  baseId: "percentage-60-outline",
  variant: "default",
  name: "Percentage 60 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage60OutlineLogo;
