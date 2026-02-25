/**
 * Auto-generated logo component: Clock 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock2OutlineLogo = React.forwardRef<SVGSVGElement, Clock2OutlineLogoProps>(
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
      <path d="M4 5a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M12 7v5l3 3" />
  <path d="M4 12h1" />
  <path d="M19 12h1" />
  <path d="M12 19v1" />
    </svg>
  )
);

Clock2OutlineLogo.displayName = "Clock2OutlineLogo";

export const Clock2OutlineLogoMetadata = {
  id: "clock-2-outline",
  baseId: "clock-2-outline",
  variant: "default",
  name: "Clock 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock2OutlineLogo;
