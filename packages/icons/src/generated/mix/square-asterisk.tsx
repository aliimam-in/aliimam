/**
 * Auto-generated logo component: Square Asterisk (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareAsteriskLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareAsteriskLogo = React.forwardRef<SVGSVGElement, SquareAsteriskLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M12 8v8" />
  <path d="m8.5 14 7-4" />
  <path d="m8.5 10 7 4" />
    </svg>
  )
);

SquareAsteriskLogo.displayName = "SquareAsteriskLogo";

export const SquareAsteriskLogoMetadata = {
  id: "square-asterisk",
  baseId: "square-asterisk",
  variant: "default",
  name: "Square Asterisk",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareAsteriskLogo;
