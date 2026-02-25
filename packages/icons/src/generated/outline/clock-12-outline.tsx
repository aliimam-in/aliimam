/**
 * Auto-generated logo component: Clock 12 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock12OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock12OutlineLogo = React.forwardRef<SVGSVGElement, Clock12OutlineLogoProps>(
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
      <path d="M3 12a9 9 0 0 0 9 9m9 -9a9 9 0 1 0 -18 0" />
  <path d="M12 7v5l.5 .5" />
  <path d="M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
  <path d="M15 21v-6" />
    </svg>
  )
);

Clock12OutlineLogo.displayName = "Clock12OutlineLogo";

export const Clock12OutlineLogoMetadata = {
  id: "clock-12-outline",
  baseId: "clock-12-outline",
  variant: "default",
  name: "Clock 12 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock12OutlineLogo;
