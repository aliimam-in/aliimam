/**
 * Auto-generated logo component: Cpu Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CpuOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CpuOffOutlineLogo = React.forwardRef<SVGSVGElement, CpuOffOutlineLogoProps>(
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
      <path d="M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a1 1 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698" />
  <path d="M13 9h2v2m0 4h-6v-6" />
  <path d="M3 10h2" />
  <path d="M3 14h2" />
  <path d="M10 3v2" />
  <path d="M14 3v2" />
  <path d="M21 10h-2" />
  <path d="M21 14h-2" />
  <path d="M14 21v-2" />
  <path d="M10 21v-2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CpuOffOutlineLogo.displayName = "CpuOffOutlineLogo";

export const CpuOffOutlineLogoMetadata = {
  id: "cpu-off-outline",
  baseId: "cpu-off-outline",
  variant: "default",
  name: "Cpu Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CpuOffOutlineLogo;
