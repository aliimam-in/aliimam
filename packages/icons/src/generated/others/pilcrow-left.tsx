/**
 * Auto-generated logo component: Pilcrow Left (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PilcrowLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PilcrowLeftLogo = React.forwardRef<SVGSVGElement, PilcrowLeftLogoProps>(
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
      <path d="M14 3v11" />
  <path d="M14 9h-3a3 3 0 0 1 0-6h9" />
  <path d="M18 3v11" />
  <path d="M22 18H2l4-4" />
  <path d="m6 22-4-4" />
    </svg>
  )
);

PilcrowLeftLogo.displayName = "PilcrowLeftLogo";

export const PilcrowLeftLogoMetadata = {
  id: "pilcrow-left",
  baseId: "pilcrow-left",
  variant: "default",
  name: "Pilcrow Left",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PilcrowLeftLogo;
