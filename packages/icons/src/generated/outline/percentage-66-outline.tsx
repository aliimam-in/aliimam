/**
 * Auto-generated logo component: Percentage 66 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage66OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage66OutlineLogo = React.forwardRef<SVGSVGElement, Percentage66OutlineLogoProps>(
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
      <path d="M12 3a9 9 0 1 1 -7.795 13.498l7.795 -4.498v-9" fill="currentColor" stroke="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage66OutlineLogo.displayName = "Percentage66OutlineLogo";

export const Percentage66OutlineLogoMetadata = {
  id: "percentage-66-outline",
  baseId: "percentage-66-outline",
  variant: "default",
  name: "Percentage 66 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage66OutlineLogo;
