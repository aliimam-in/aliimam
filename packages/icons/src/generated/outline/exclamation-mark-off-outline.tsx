/**
 * Auto-generated logo component: Exclamation Mark Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExclamationMarkOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExclamationMarkOffOutlineLogo = React.forwardRef<SVGSVGElement, ExclamationMarkOffOutlineLogoProps>(
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
      <path d="M12 19v.01" />
  <path d="M12 15v-3m0 -4v-3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ExclamationMarkOffOutlineLogo.displayName = "ExclamationMarkOffOutlineLogo";

export const ExclamationMarkOffOutlineLogoMetadata = {
  id: "exclamation-mark-off-outline",
  baseId: "exclamation-mark-off-outline",
  variant: "default",
  name: "Exclamation Mark Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExclamationMarkOffOutlineLogo;
