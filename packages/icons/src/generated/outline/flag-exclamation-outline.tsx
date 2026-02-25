/**
 * Auto-generated logo component: Flag Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagExclamationOutlineLogo = React.forwardRef<SVGSVGElement, FlagExclamationOutlineLogoProps>(
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
      <path d="M15.035 15.408a4.98 4.98 0 0 1 -3.035 -1.408a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" />
  <path d="M5 21v-7" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

FlagExclamationOutlineLogo.displayName = "FlagExclamationOutlineLogo";

export const FlagExclamationOutlineLogoMetadata = {
  id: "flag-exclamation-outline",
  baseId: "flag-exclamation-outline",
  variant: "default",
  name: "Flag Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagExclamationOutlineLogo;
