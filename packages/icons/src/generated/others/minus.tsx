/**
 * Auto-generated logo component: Minus (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MinusLogo = React.forwardRef<SVGSVGElement, MinusLogoProps>(
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
      <path d="M5 12h14" />
    </svg>
  )
);

MinusLogo.displayName = "MinusLogo";

export const MinusLogoMetadata = {
  id: "minus",
  baseId: "minus",
  variant: "default",
  name: "Minus",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MinusLogo;
