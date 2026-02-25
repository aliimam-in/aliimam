/**
 * Auto-generated logo component: Monkeybar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MonkeybarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MonkeybarOutlineLogo = React.forwardRef<SVGSVGElement, MonkeybarOutlineLogoProps>(
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
      <path d="M3 21v-15l5 -3l5 3v15" />
  <path d="M8 21v-7" />
  <path d="M3 14h10" />
  <path d="M6 10a2 2 0 1 1 4 0" />
  <path d="M13 13c6 0 3 8 8 8" />
    </svg>
  )
);

MonkeybarOutlineLogo.displayName = "MonkeybarOutlineLogo";

export const MonkeybarOutlineLogoMetadata = {
  id: "monkeybar-outline",
  baseId: "monkeybar-outline",
  variant: "default",
  name: "Monkeybar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MonkeybarOutlineLogo;
