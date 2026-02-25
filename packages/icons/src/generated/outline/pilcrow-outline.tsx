/**
 * Auto-generated logo component: Pilcrow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PilcrowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PilcrowOutlineLogo = React.forwardRef<SVGSVGElement, PilcrowOutlineLogoProps>(
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
      <path d="M13 4v16" />
  <path d="M17 4v16" />
  <path d="M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5" />
    </svg>
  )
);

PilcrowOutlineLogo.displayName = "PilcrowOutlineLogo";

export const PilcrowOutlineLogoMetadata = {
  id: "pilcrow-outline",
  baseId: "pilcrow-outline",
  variant: "default",
  name: "Pilcrow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PilcrowOutlineLogo;
