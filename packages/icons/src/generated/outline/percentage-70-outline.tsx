/**
 * Auto-generated logo component: Percentage 70 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage70OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage70OutlineLogo = React.forwardRef<SVGSVGElement, Percentage70OutlineLogoProps>(
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
      <path d="M12 3a9 9 0 1 1 -8.495 11.973l8.495 -2.973v-9" fill="currentColor" stroke="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage70OutlineLogo.displayName = "Percentage70OutlineLogo";

export const Percentage70OutlineLogoMetadata = {
  id: "percentage-70-outline",
  baseId: "percentage-70-outline",
  variant: "default",
  name: "Percentage 70 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage70OutlineLogo;
