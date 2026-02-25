/**
 * Auto-generated logo component: Transgender (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransgenderLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransgenderLogo = React.forwardRef<SVGSVGElement, TransgenderLogoProps>(
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
      <path d="M12 16v6" />
  <path d="M14 20h-4" />
  <path d="M18 2h4v4" />
  <path d="m2 2 7.17 7.17" />
  <path d="M2 5.355V2h3.357" />
  <path d="m22 2-7.17 7.17" />
  <path d="M8 5 5 8" />
  <circle cx="12" cy="12" r="4" />
    </svg>
  )
);

TransgenderLogo.displayName = "TransgenderLogo";

export const TransgenderLogoMetadata = {
  id: "transgender",
  baseId: "transgender",
  variant: "default",
  name: "Transgender",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransgenderLogo;
