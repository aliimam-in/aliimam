/**
 * Auto-generated logo component: Mist Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MistOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MistOutlineLogo = React.forwardRef<SVGSVGElement, MistOutlineLogoProps>(
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
      <path d="M5 5h3m4 0h9" />
  <path d="M3 10h11m4 0h1" />
  <path d="M5 15h5m4 0h7" />
  <path d="M3 20h9m4 0h3" />
    </svg>
  )
);

MistOutlineLogo.displayName = "MistOutlineLogo";

export const MistOutlineLogoMetadata = {
  id: "mist-outline",
  baseId: "mist-outline",
  variant: "default",
  name: "Mist Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MistOutlineLogo;
