/**
 * Auto-generated logo component: Donut (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DonutLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DonutLogo = React.forwardRef<SVGSVGElement, DonutLogoProps>(
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
      <path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" />
  <circle cx="12" cy="12" r="3" />
    </svg>
  )
);

DonutLogo.displayName = "DonutLogo";

export const DonutLogoMetadata = {
  id: "donut",
  baseId: "donut",
  variant: "default",
  name: "Donut",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DonutLogo;
