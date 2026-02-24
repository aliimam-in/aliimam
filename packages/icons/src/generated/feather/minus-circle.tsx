/**
 * Auto-generated logo component: Minus Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MinusCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MinusCircleLogo = React.forwardRef<SVGSVGElement, MinusCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  )
);

MinusCircleLogo.displayName = "MinusCircleLogo";

export const MinusCircleLogoMetadata = {
  id: "minus-circle",
  baseId: "minus-circle",
  variant: "default",
  name: "Minus Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MinusCircleLogo;
