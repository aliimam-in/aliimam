/**
 * Auto-generated logo component: Underline (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UnderlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UnderlineLogo = React.forwardRef<SVGSVGElement, UnderlineLogoProps>(
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
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><line x1="4" y1="21" x2="20" y2="21"/>
    </svg>
  )
);

UnderlineLogo.displayName = "UnderlineLogo";

export const UnderlineLogoMetadata = {
  id: "underline",
  baseId: "underline",
  variant: "default",
  name: "Underline",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UnderlineLogo;
