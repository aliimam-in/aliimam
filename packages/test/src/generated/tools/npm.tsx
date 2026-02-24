/**
 * Auto-generated logo component: Npm
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NpmLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NpmLogo = React.forwardRef<SVGSVGElement, NpmLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" fill="#CB3837"/><text x="12" y="18" font-size="14" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial">npm</text>
    </svg>
  )
);

NpmLogo.displayName = "NpmLogo";

export const NpmLogoMetadata = {
  id: "npm",
  name: "Npm",
  category: "tools",
  tags: ["bsdv"],
  viewBox: "0 0 24 24",
} as const;

export default NpmLogo;
