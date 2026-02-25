/**
 * Auto-generated logo component: Grip Vertical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GripVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GripVerticalLogo = React.forwardRef<SVGSVGElement, GripVerticalLogoProps>(
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
      <circle cx="9" cy="12" r="1" />
  <circle cx="9" cy="5" r="1" />
  <circle cx="9" cy="19" r="1" />
  <circle cx="15" cy="12" r="1" />
  <circle cx="15" cy="5" r="1" />
  <circle cx="15" cy="19" r="1" />
    </svg>
  )
);

GripVerticalLogo.displayName = "GripVerticalLogo";

export const GripVerticalLogoMetadata = {
  id: "grip-vertical",
  baseId: "grip-vertical",
  variant: "default",
  name: "Grip Vertical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GripVerticalLogo;
