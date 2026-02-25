/**
 * Auto-generated logo component: Tallymark 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Tallymark2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Tallymark2OutlineLogo = React.forwardRef<SVGSVGElement, Tallymark2OutlineLogoProps>(
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
      <path d="M10 5l0 14" />
  <path d="M14 5l0 14" />
    </svg>
  )
);

Tallymark2OutlineLogo.displayName = "Tallymark2OutlineLogo";

export const Tallymark2OutlineLogoMetadata = {
  id: "tallymark-2-outline",
  baseId: "tallymark-2-outline",
  variant: "default",
  name: "Tallymark 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Tallymark2OutlineLogo;
