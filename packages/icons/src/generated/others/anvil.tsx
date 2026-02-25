/**
 * Auto-generated logo component: Anvil (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AnvilLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AnvilLogo = React.forwardRef<SVGSVGElement, AnvilLogoProps>(
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
      <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
  <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
  <path d="M9 12v5" />
  <path d="M15 12v5" />
  <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
    </svg>
  )
);

AnvilLogo.displayName = "AnvilLogo";

export const AnvilLogoMetadata = {
  id: "anvil",
  baseId: "anvil",
  variant: "default",
  name: "Anvil",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AnvilLogo;
