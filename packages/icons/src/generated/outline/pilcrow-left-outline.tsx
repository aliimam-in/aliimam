/**
 * Auto-generated logo component: Pilcrow Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PilcrowLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PilcrowLeftOutlineLogo = React.forwardRef<SVGSVGElement, PilcrowLeftOutlineLogoProps>(
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
      <path d="M11 9h-2a3 3 0 1 1 0 -6h7" />
  <path d="M11 3v11" />
  <path d="M15 3v11" />
  <path d="M3 18h18" />
  <path d="M6 15l-3 3l3 3" />
    </svg>
  )
);

PilcrowLeftOutlineLogo.displayName = "PilcrowLeftOutlineLogo";

export const PilcrowLeftOutlineLogoMetadata = {
  id: "pilcrow-left-outline",
  baseId: "pilcrow-left-outline",
  variant: "default",
  name: "Pilcrow Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PilcrowLeftOutlineLogo;
