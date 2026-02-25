/**
 * Auto-generated logo component: Bottle Wine (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BottleWineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BottleWineLogo = React.forwardRef<SVGSVGElement, BottleWineLogoProps>(
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
      <path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" />
  <path d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" />
    </svg>
  )
);

BottleWineLogo.displayName = "BottleWineLogo";

export const BottleWineLogoMetadata = {
  id: "bottle-wine",
  baseId: "bottle-wine",
  variant: "default",
  name: "Bottle Wine",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BottleWineLogo;
