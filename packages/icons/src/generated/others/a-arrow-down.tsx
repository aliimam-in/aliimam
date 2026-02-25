/**
 * Auto-generated logo component: A Arrow Down (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AArrowDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AArrowDownLogo = React.forwardRef<SVGSVGElement, AArrowDownLogoProps>(
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
      <path d="m14 12 4 4 4-4" />
  <path d="M18 16V7" />
  <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
  <path d="M3.304 13h6.392" />
    </svg>
  )
);

AArrowDownLogo.displayName = "AArrowDownLogo";

export const AArrowDownLogoMetadata = {
  id: "a-arrow-down",
  baseId: "a-arrow-down",
  variant: "default",
  name: "A Arrow Down",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AArrowDownLogo;
