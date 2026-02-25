/**
 * Auto-generated logo component: Barbell (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BarbellFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BarbellFilledLogo = React.forwardRef<SVGSVGElement, BarbellFilledLogoProps>(
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
      <path d="M4 7a1 1 0 0 1 1 1v8a1 1 0 0 1 -2 0v-3h-1a1 1 0 0 1 0 -2h1v-3a1 1 0 0 1 1 -1" />
  <path d="M20 7a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1 -2 0v-8a1 1 0 0 1 1 -1" />
  <path d="M16 5a2 2 0 0 1 2 2v10a2 2 0 1 1 -4 0v-4h-4v4a2 2 0 1 1 -4 0v-10a2 2 0 1 1 4 0v4h4v-4a2 2 0 0 1 2 -2" />
    </svg>
  )
);

BarbellFilledLogo.displayName = "BarbellFilledLogo";

export const BarbellFilledLogoMetadata = {
  id: "barbell_filled",
  baseId: "barbell",
  variant: "filled",
  name: "Barbell",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BarbellFilledLogo;
