/**
 * Auto-generated logo component: Gpu (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GpuLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GpuLogo = React.forwardRef<SVGSVGElement, GpuLogoProps>(
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
      <path d="M2 21V3" />
  <path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26" />
  <path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" />
  <circle cx="16" cy="11" r="2" />
  <circle cx="8" cy="11" r="2" />
    </svg>
  )
);

GpuLogo.displayName = "GpuLogo";

export const GpuLogoMetadata = {
  id: "gpu",
  baseId: "gpu",
  variant: "default",
  name: "Gpu",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GpuLogo;
