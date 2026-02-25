/**
 * Auto-generated logo component: Polaroid Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PolaroidOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PolaroidOutlineLogo = React.forwardRef<SVGSVGElement, PolaroidOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M4 16l16 0" />
  <path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" />
  <path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" />
  <path d="M14 7l.01 0" />
    </svg>
  )
);

PolaroidOutlineLogo.displayName = "PolaroidOutlineLogo";

export const PolaroidOutlineLogoMetadata = {
  id: "polaroid-outline",
  baseId: "polaroid-outline",
  variant: "default",
  name: "Polaroid Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PolaroidOutlineLogo;
