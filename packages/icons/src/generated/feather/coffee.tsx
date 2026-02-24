/**
 * Auto-generated logo component: Coffee (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoffeeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoffeeLogo = React.forwardRef<SVGSVGElement, CoffeeLogoProps>(
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
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  )
);

CoffeeLogo.displayName = "CoffeeLogo";

export const CoffeeLogoMetadata = {
  id: "coffee",
  baseId: "coffee",
  variant: "default",
  name: "Coffee",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoffeeLogo;
