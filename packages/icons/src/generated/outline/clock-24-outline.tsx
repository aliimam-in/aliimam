/**
 * Auto-generated logo component: Clock 24 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Clock24OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Clock24OutlineLogo = React.forwardRef<SVGSVGElement, Clock24OutlineLogoProps>(
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
      <path d="M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0" />
  <path d="M12 7v5" />
  <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
  <path d="M18 15v2a1 1 0 0 0 1 1h1" />
  <path d="M21 15v6" />
    </svg>
  )
);

Clock24OutlineLogo.displayName = "Clock24OutlineLogo";

export const Clock24OutlineLogoMetadata = {
  id: "clock-24-outline",
  baseId: "clock-24-outline",
  variant: "default",
  name: "Clock 24 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Clock24OutlineLogo;
