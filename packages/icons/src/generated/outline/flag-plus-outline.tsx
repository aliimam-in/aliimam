/**
 * Auto-generated logo component: Flag Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagPlusOutlineLogo = React.forwardRef<SVGSVGElement, FlagPlusOutlineLogoProps>(
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
      <path d="M14.433 15.315a4.978 4.978 0 0 1 -2.433 -1.315a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" />
  <path d="M5 21v-7" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

FlagPlusOutlineLogo.displayName = "FlagPlusOutlineLogo";

export const FlagPlusOutlineLogoMetadata = {
  id: "flag-plus-outline",
  baseId: "flag-plus-outline",
  variant: "default",
  name: "Flag Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagPlusOutlineLogo;
