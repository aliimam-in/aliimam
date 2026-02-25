/**
 * Auto-generated logo component: Braces (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracesLogo = React.forwardRef<SVGSVGElement, BracesLogoProps>(
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
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
  <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </svg>
  )
);

BracesLogo.displayName = "BracesLogo";

export const BracesLogoMetadata = {
  id: "braces",
  baseId: "braces",
  variant: "default",
  name: "Braces",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracesLogo;
