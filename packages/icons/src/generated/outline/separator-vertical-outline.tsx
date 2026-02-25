/**
 * Auto-generated logo component: Separator Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SeparatorVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SeparatorVerticalOutlineLogo = React.forwardRef<SVGSVGElement, SeparatorVerticalOutlineLogoProps>(
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
      <path d="M12 4l0 16" />
  <path d="M8 8l-4 4l4 4" />
  <path d="M16 16l4 -4l-4 -4" />
    </svg>
  )
);

SeparatorVerticalOutlineLogo.displayName = "SeparatorVerticalOutlineLogo";

export const SeparatorVerticalOutlineLogoMetadata = {
  id: "separator-vertical-outline",
  baseId: "separator-vertical-outline",
  variant: "default",
  name: "Separator Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SeparatorVerticalOutlineLogo;
