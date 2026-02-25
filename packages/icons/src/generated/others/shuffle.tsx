/**
 * Auto-generated logo component: Shuffle (default)
 * Category: others
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
      <path d="m18 14 4 4-4 4" />
  <path d="m18 2 4 4-4 4" />
  <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
  <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
  <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
    </svg>
  )
);

ShuffleLogo.displayName = "ShuffleLogo";

export const ShuffleLogoMetadata = {
  id: "shuffle",
  baseId: "shuffle",
  variant: "default",
  name: "Shuffle",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShuffleLogo;
