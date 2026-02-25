/**
 * Auto-generated logo component: Proportions (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ProportionsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ProportionsLogo = React.forwardRef<SVGSVGElement, ProportionsLogoProps>(
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M12 9v11" />
  <path d="M2 9h13a2 2 0 0 1 2 2v9" />
    </svg>
  )
);

ProportionsLogo.displayName = "ProportionsLogo";

export const ProportionsLogoMetadata = {
  id: "proportions",
  baseId: "proportions",
  variant: "default",
  name: "Proportions",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ProportionsLogo;
