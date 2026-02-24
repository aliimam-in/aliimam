/**
 * Auto-generated logo component: Cpu (default)
 * Category: feather
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
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  )
);

CpuLogo.displayName = "CpuLogo";

export const CpuLogoMetadata = {
  id: "cpu",
  baseId: "cpu",
  variant: "default",
  name: "Cpu",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CpuLogo;
