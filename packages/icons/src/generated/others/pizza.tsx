/**
 * Auto-generated logo component: Pizza (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PizzaLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PizzaLogo = React.forwardRef<SVGSVGElement, PizzaLogoProps>(
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
      <path d="m12 14-1 1" />
  <path d="m13.75 18.25-1.25 1.42" />
  <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
  <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
  <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
    </svg>
  )
);

PizzaLogo.displayName = "PizzaLogo";

export const PizzaLogoMetadata = {
  id: "pizza",
  baseId: "pizza",
  variant: "default",
  name: "Pizza",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PizzaLogo;
