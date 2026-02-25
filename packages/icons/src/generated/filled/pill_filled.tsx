/**
 * Auto-generated logo component: Pill (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PillFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PillFilledLogo = React.forwardRef<SVGSVGElement, PillFilledLogoProps>(
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
      <path d="M20.207 3.793a5.95 5.95 0 0 1 0 8.414l-8 8a5.95 5.95 0 0 1 -8.414 -8.414l8 -8a5.95 5.95 0 0 1 8.414 0m-7 1.414l-4.294 4.293l5.586 5.586l4.294 -4.292a3.95 3.95 0 1 0 -5.586 -5.586" />
    </svg>
  )
);

PillFilledLogo.displayName = "PillFilledLogo";

export const PillFilledLogoMetadata = {
  id: "pill_filled",
  baseId: "pill",
  variant: "filled",
  name: "Pill",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PillFilledLogo;
