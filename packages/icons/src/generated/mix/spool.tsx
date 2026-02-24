/**
 * Auto-generated logo component: Spool (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpoolLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpoolLogo = React.forwardRef<SVGSVGElement, SpoolLogoProps>(
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
      <path d="M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66" />
  <path d="m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178" />
    </svg>
  )
);

SpoolLogo.displayName = "SpoolLogo";

export const SpoolLogoMetadata = {
  id: "spool",
  baseId: "spool",
  variant: "default",
  name: "Spool",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpoolLogo;
