/**
 * Auto-generated logo component: Coffee Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoffeeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoffeeOffOutlineLogo = React.forwardRef<SVGSVGElement, CoffeeOffOutlineLogoProps>(
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
      <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.73 -.565 1.783 -.923 3 -.99" />
  <path d="M8 3c-.194 .14 -.364 .305 -.506 .49" />
  <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
  <path d="M14 10h3v3m-.257 3.743a6 6 0 0 1 -5.743 4.257h-2a6 6 0 0 1 -6 -6v-5h7" />
  <path d="M20.116 16.124a3 3 0 0 0 -3.118 -4.953" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CoffeeOffOutlineLogo.displayName = "CoffeeOffOutlineLogo";

export const CoffeeOffOutlineLogoMetadata = {
  id: "coffee-off-outline",
  baseId: "coffee-off-outline",
  variant: "default",
  name: "Coffee Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoffeeOffOutlineLogo;
