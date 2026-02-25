/**
 * Auto-generated logo component: Coins Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoinsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoinsOutlineLogo = React.forwardRef<SVGSVGElement, CoinsOutlineLogoProps>(
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
      <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3" />
  <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
  <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598" />
  <path d="M3 6v10c0 .888 .772 1.45 2 2" />
  <path d="M3 11c0 .888 .772 1.45 2 2" />
    </svg>
  )
);

CoinsOutlineLogo.displayName = "CoinsOutlineLogo";

export const CoinsOutlineLogoMetadata = {
  id: "coins-outline",
  baseId: "coins-outline",
  variant: "default",
  name: "Coins Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoinsOutlineLogo;
