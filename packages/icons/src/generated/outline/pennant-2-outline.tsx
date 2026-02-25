/**
 * Auto-generated logo component: Pennant 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Pennant2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Pennant2OutlineLogo = React.forwardRef<SVGSVGElement, Pennant2OutlineLogoProps>(
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
      <path d="M16 21h-4" />
  <path d="M14 21v-18" />
  <path d="M14 4l-9 4l9 4" />
    </svg>
  )
);

Pennant2OutlineLogo.displayName = "Pennant2OutlineLogo";

export const Pennant2OutlineLogoMetadata = {
  id: "pennant-2-outline",
  baseId: "pennant-2-outline",
  variant: "default",
  name: "Pennant 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Pennant2OutlineLogo;
