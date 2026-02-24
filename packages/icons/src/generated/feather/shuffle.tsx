/**
 * Auto-generated logo component: Shuffle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShuffleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShuffleLogo = React.forwardRef<SVGSVGElement, ShuffleLogoProps>(
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
      <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>
    </svg>
  )
);

ShuffleLogo.displayName = "ShuffleLogo";

export const ShuffleLogoMetadata = {
  id: "shuffle",
  baseId: "shuffle",
  variant: "default",
  name: "Shuffle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShuffleLogo;
