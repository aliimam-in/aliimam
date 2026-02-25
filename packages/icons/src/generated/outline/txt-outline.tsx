/**
 * Auto-generated logo component: Txt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TxtOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TxtOutlineLogo = React.forwardRef<SVGSVGElement, TxtOutlineLogoProps>(
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
      <path d="M3 8h4" />
  <path d="M5 8v8" />
  <path d="M17 8h4" />
  <path d="M19 8v8" />
  <path d="M10 8l4 8" />
  <path d="M10 16l4 -8" />
    </svg>
  )
);

TxtOutlineLogo.displayName = "TxtOutlineLogo";

export const TxtOutlineLogoMetadata = {
  id: "txt-outline",
  baseId: "txt-outline",
  variant: "default",
  name: "Txt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TxtOutlineLogo;
