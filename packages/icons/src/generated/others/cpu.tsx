/**
 * Auto-generated logo component: Cpu (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CpuLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CpuLogo = React.forwardRef<SVGSVGElement, CpuLogoProps>(
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

CpuLogo.displayName = "CpuLogo";

export const CpuLogoMetadata = {
  id: "cpu",
  baseId: "cpu",
  variant: "default",
  name: "Cpu",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CpuLogo;
