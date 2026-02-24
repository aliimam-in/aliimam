/**
 * Auto-generated logo component: Cpu (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCpuLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCpuLogo = React.forwardRef<SVGSVGElement, MixCpuLogoProps>(
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
      <path d="M12 20v2" />
  <path d="M12 2v2" />
  <path d="M17 20v2" />
  <path d="M17 2v2" />
  <path d="M2 12h2" />
  <path d="M2 17h2" />
  <path d="M2 7h2" />
  <path d="M20 12h2" />
  <path d="M20 17h2" />
  <path d="M20 7h2" />
  <path d="M7 20v2" />
  <path d="M7 2v2" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <rect x="8" y="8" width="8" height="8" rx="1" />
    </svg>
  )
);

MixCpuLogo.displayName = "MixCpuLogo";

export const MixCpuLogoMetadata = {
  id: "cpu",
  baseId: "cpu",
  variant: "default",
  name: "Cpu",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCpuLogo;
