/**
 * Auto-generated logo component: Grip Horizontal (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GripHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GripHorizontalLogo = React.forwardRef<SVGSVGElement, GripHorizontalLogoProps>(
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
      <circle cx="12" cy="9" r="1" />
  <circle cx="19" cy="9" r="1" />
  <circle cx="5" cy="9" r="1" />
  <circle cx="12" cy="15" r="1" />
  <circle cx="19" cy="15" r="1" />
  <circle cx="5" cy="15" r="1" />
    </svg>
  )
);

GripHorizontalLogo.displayName = "GripHorizontalLogo";

export const GripHorizontalLogoMetadata = {
  id: "grip-horizontal",
  baseId: "grip-horizontal",
  variant: "default",
  name: "Grip Horizontal",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GripHorizontalLogo;
