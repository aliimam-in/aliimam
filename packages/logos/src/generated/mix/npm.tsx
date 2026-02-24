/**
 * Auto-generated logo component: Npm (default)
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
      viewBox="0 0 2500 2500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#c00" d="M0 0h2500v2500H0z" /><path fill="#fff" d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" />
    </svg>
  )
);

NpmLogo.displayName = "NpmLogo";

export const NpmLogoMetadata = {
  id: "npm",
  baseId: "npm",
  variant: "default",
  name: "Npm",
  category: "mix",
  tags: [],
  viewBox: "0 0 2500 2500",
} as const;

export default NpmLogo;
