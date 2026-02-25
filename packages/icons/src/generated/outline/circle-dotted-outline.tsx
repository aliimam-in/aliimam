/**
 * Auto-generated logo component: Circle Dotted Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleDottedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleDottedOutlineLogo = React.forwardRef<SVGSVGElement, CircleDottedOutlineLogoProps>(
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
      <path d="M7.5 4.21l0 .01" />
  <path d="M4.21 7.5l0 .01" />
  <path d="M3 12l0 .01" />
  <path d="M4.21 16.5l0 .01" />
  <path d="M7.5 19.79l0 .01" />
  <path d="M12 21l0 .01" />
  <path d="M16.5 19.79l0 .01" />
  <path d="M19.79 16.5l0 .01" />
  <path d="M21 12l0 .01" />
  <path d="M19.79 7.5l0 .01" />
  <path d="M16.5 4.21l0 .01" />
  <path d="M12 3l0 .01" />
    </svg>
  )
);

CircleDottedOutlineLogo.displayName = "CircleDottedOutlineLogo";

export const CircleDottedOutlineLogoMetadata = {
  id: "circle-dotted-outline",
  baseId: "circle-dotted-outline",
  variant: "default",
  name: "Circle Dotted Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleDottedOutlineLogo;
