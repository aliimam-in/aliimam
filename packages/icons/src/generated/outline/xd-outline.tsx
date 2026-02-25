/**
 * Auto-generated logo component: Xd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XdOutlineLogo = React.forwardRef<SVGSVGElement, XdOutlineLogoProps>(
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
      <path d="M6 8l4 8" />
  <path d="M6 16l4 -8" />
  <path d="M14 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2" />
    </svg>
  )
);

XdOutlineLogo.displayName = "XdOutlineLogo";

export const XdOutlineLogoMetadata = {
  id: "xd-outline",
  baseId: "xd-outline",
  variant: "default",
  name: "Xd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XdOutlineLogo;
