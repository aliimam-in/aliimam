/**
 * Auto-generated logo component: Flag Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagDownOutlineLogo = React.forwardRef<SVGSVGElement, FlagDownOutlineLogoProps>(
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
      <path d="M14.434 15.315a4.978 4.978 0 0 1 -2.434 -1.315a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" />
  <path d="M5 21v-7" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
    </svg>
  )
);

FlagDownOutlineLogo.displayName = "FlagDownOutlineLogo";

export const FlagDownOutlineLogoMetadata = {
  id: "flag-down-outline",
  baseId: "flag-down-outline",
  variant: "default",
  name: "Flag Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagDownOutlineLogo;
