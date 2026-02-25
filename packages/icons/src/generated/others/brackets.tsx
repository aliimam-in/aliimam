/**
 * Auto-generated logo component: Brackets (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracketsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracketsLogo = React.forwardRef<SVGSVGElement, BracketsLogoProps>(
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
      <path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" />
  <path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" />
    </svg>
  )
);

BracketsLogo.displayName = "BracketsLogo";

export const BracketsLogoMetadata = {
  id: "brackets",
  baseId: "brackets",
  variant: "default",
  name: "Brackets",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracketsLogo;
