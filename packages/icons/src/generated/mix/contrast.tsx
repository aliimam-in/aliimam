/**
 * Auto-generated logo component: Contrast (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ContrastLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ContrastLogo = React.forwardRef<SVGSVGElement, ContrastLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M12 18a6 6 0 0 0 0-12v12z" />
    </svg>
  )
);

ContrastLogo.displayName = "ContrastLogo";

export const ContrastLogoMetadata = {
  id: "contrast",
  baseId: "contrast",
  variant: "default",
  name: "Contrast",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ContrastLogo;
