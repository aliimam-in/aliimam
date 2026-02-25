/**
 * Auto-generated logo component: Atom 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Atom2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Atom2OutlineLogo = React.forwardRef<SVGSVGElement, Atom2OutlineLogoProps>(
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
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 21l0 .01" />
  <path d="M3 9l0 .01" />
  <path d="M21 9l0 .01" />
  <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
  <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
  <path d="M6.2 5a9 9 0 0 1 11.4 0" />
    </svg>
  )
);

Atom2OutlineLogo.displayName = "Atom2OutlineLogo";

export const Atom2OutlineLogoMetadata = {
  id: "atom-2-outline",
  baseId: "atom-2-outline",
  variant: "default",
  name: "Atom 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Atom2OutlineLogo;
