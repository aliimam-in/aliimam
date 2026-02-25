/**
 * Auto-generated logo component: Exclamation Mark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExclamationMarkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExclamationMarkOutlineLogo = React.forwardRef<SVGSVGElement, ExclamationMarkOutlineLogoProps>(
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
  <path d="M12 15v-10" />
    </svg>
  )
);

ExclamationMarkOutlineLogo.displayName = "ExclamationMarkOutlineLogo";

export const ExclamationMarkOutlineLogoMetadata = {
  id: "exclamation-mark-outline",
  baseId: "exclamation-mark-outline",
  variant: "default",
  name: "Exclamation Mark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExclamationMarkOutlineLogo;
