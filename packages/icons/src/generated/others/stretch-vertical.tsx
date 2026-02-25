/**
 * Auto-generated logo component: Stretch Vertical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StretchVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StretchVerticalLogo = React.forwardRef<SVGSVGElement, StretchVerticalLogoProps>(
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
      <rect width="6" height="20" x="4" y="2" rx="2" />
  <rect width="6" height="20" x="14" y="2" rx="2" />
    </svg>
  )
);

StretchVerticalLogo.displayName = "StretchVerticalLogo";

export const StretchVerticalLogoMetadata = {
  id: "stretch-vertical",
  baseId: "stretch-vertical",
  variant: "default",
  name: "Stretch Vertical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StretchVerticalLogo;
