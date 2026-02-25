/**
 * Auto-generated logo component: Stretch Horizontal (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StretchHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StretchHorizontalLogo = React.forwardRef<SVGSVGElement, StretchHorizontalLogoProps>(
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
      <rect width="20" height="6" x="2" y="4" rx="2" />
  <rect width="20" height="6" x="2" y="14" rx="2" />
    </svg>
  )
);

StretchHorizontalLogo.displayName = "StretchHorizontalLogo";

export const StretchHorizontalLogoMetadata = {
  id: "stretch-horizontal",
  baseId: "stretch-horizontal",
  variant: "default",
  name: "Stretch Horizontal",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StretchHorizontalLogo;
