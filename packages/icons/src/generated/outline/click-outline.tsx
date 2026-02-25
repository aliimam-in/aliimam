/**
 * Auto-generated logo component: Click Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClickOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClickOutlineLogo = React.forwardRef<SVGSVGElement, ClickOutlineLogoProps>(
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
      <path d="M3 12l3 0" />
  <path d="M12 3l0 3" />
  <path d="M7.8 7.8l-2.2 -2.2" />
  <path d="M16.2 7.8l2.2 -2.2" />
  <path d="M7.8 16.2l-2.2 2.2" />
  <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
    </svg>
  )
);

ClickOutlineLogo.displayName = "ClickOutlineLogo";

export const ClickOutlineLogoMetadata = {
  id: "click-outline",
  baseId: "click-outline",
  variant: "default",
  name: "Click Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClickOutlineLogo;
