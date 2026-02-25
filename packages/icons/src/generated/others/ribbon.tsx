/**
 * Auto-generated logo component: Ribbon (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RibbonLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RibbonLogo = React.forwardRef<SVGSVGElement, RibbonLogoProps>(
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
      <path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" />
  <path d="m12 18 2.57-3.5" />
  <path d="M6.243 9.016a7 7 0 0 1 11.507-.009" />
  <path d="M9.35 14.53 12 11.22" />
  <path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" />
    </svg>
  )
);

RibbonLogo.displayName = "RibbonLogo";

export const RibbonLogoMetadata = {
  id: "ribbon",
  baseId: "ribbon",
  variant: "default",
  name: "Ribbon",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RibbonLogo;
