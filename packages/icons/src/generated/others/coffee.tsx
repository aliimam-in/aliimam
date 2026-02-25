/**
 * Auto-generated logo component: Coffee (default)
 * Category: others
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
      <path d="M10 2v2" />
  <path d="M14 2v2" />
  <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
  <path d="M6 2v2" />
    </svg>
  )
);

CoffeeLogo.displayName = "CoffeeLogo";

export const CoffeeLogoMetadata = {
  id: "coffee",
  baseId: "coffee",
  variant: "default",
  name: "Coffee",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoffeeLogo;
