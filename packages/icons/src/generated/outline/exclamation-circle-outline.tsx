/**
 * Auto-generated logo component: Exclamation Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExclamationCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExclamationCircleOutlineLogo = React.forwardRef<SVGSVGElement, ExclamationCircleOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 9v4" />
  <path d="M12 16v.01" />
    </svg>
  )
);

ExclamationCircleOutlineLogo.displayName = "ExclamationCircleOutlineLogo";

export const ExclamationCircleOutlineLogoMetadata = {
  id: "exclamation-circle-outline",
  baseId: "exclamation-circle-outline",
  variant: "default",
  name: "Exclamation Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExclamationCircleOutlineLogo;
