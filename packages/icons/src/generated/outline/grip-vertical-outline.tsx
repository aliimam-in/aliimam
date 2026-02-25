/**
 * Auto-generated logo component: Grip Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GripVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GripVerticalOutlineLogo = React.forwardRef<SVGSVGElement, GripVerticalOutlineLogoProps>(
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
      <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

GripVerticalOutlineLogo.displayName = "GripVerticalOutlineLogo";

export const GripVerticalOutlineLogoMetadata = {
  id: "grip-vertical-outline",
  baseId: "grip-vertical-outline",
  variant: "default",
  name: "Grip Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GripVerticalOutlineLogo;
