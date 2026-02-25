/**
 * Auto-generated logo component: Cpu Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CpuOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CpuOutlineLogo = React.forwardRef<SVGSVGElement, CpuOutlineLogoProps>(
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
      <path d="M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12" />
  <path d="M9 9h6v6h-6l0 -6" />
  <path d="M3 10h2" />
  <path d="M3 14h2" />
  <path d="M10 3v2" />
  <path d="M14 3v2" />
  <path d="M21 10h-2" />
  <path d="M21 14h-2" />
  <path d="M14 21v-2" />
  <path d="M10 21v-2" />
    </svg>
  )
);

CpuOutlineLogo.displayName = "CpuOutlineLogo";

export const CpuOutlineLogoMetadata = {
  id: "cpu-outline",
  baseId: "cpu-outline",
  variant: "default",
  name: "Cpu Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CpuOutlineLogo;
