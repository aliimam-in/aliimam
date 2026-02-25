/**
 * Auto-generated logo component: Dots Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DotsVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DotsVerticalOutlineLogo = React.forwardRef<SVGSVGElement, DotsVerticalOutlineLogoProps>(
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
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

DotsVerticalOutlineLogo.displayName = "DotsVerticalOutlineLogo";

export const DotsVerticalOutlineLogoMetadata = {
  id: "dots-vertical-outline",
  baseId: "dots-vertical-outline",
  variant: "default",
  name: "Dots Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DotsVerticalOutlineLogo;
