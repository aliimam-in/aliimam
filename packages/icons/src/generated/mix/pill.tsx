/**
 * Auto-generated logo component: Pill (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PillLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PillLogo = React.forwardRef<SVGSVGElement, PillLogoProps>(
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
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
  <path d="m8.5 8.5 7 7" />
    </svg>
  )
);

PillLogo.displayName = "PillLogo";

export const PillLogoMetadata = {
  id: "pill",
  baseId: "pill",
  variant: "default",
  name: "Pill",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PillLogo;
