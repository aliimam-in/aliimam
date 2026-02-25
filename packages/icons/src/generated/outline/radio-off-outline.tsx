/**
 * Auto-generated logo component: Radio Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadioOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadioOffOutlineLogo = React.forwardRef<SVGSVGElement, RadioOffOutlineLogoProps>(
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
      <path d="M14 3l-4.986 2m-2.875 1.15l-1.51 .604a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 .708 -.294m.292 -3.706v-8a1 1 0 0 0 -1 -1h-8m-4 0h-2.5" />
  <path d="M4 12h8m4 0h4" />
  <path d="M7 12v-2" />
  <path d="M13 16v.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RadioOffOutlineLogo.displayName = "RadioOffOutlineLogo";

export const RadioOffOutlineLogoMetadata = {
  id: "radio-off-outline",
  baseId: "radio-off-outline",
  variant: "default",
  name: "Radio Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadioOffOutlineLogo;
