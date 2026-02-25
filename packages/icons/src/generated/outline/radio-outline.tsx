/**
 * Auto-generated logo component: Radio Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadioOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadioOutlineLogo = React.forwardRef<SVGSVGElement, RadioOutlineLogoProps>(
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
      <path d="M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5" />
  <path d="M4 12h16" />
  <path d="M7 12v-2" />
  <path d="M17 16v.01" />
  <path d="M13 16v.01" />
    </svg>
  )
);

RadioOutlineLogo.displayName = "RadioOutlineLogo";

export const RadioOutlineLogoMetadata = {
  id: "radio-outline",
  baseId: "radio-outline",
  variant: "default",
  name: "Radio Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadioOutlineLogo;
