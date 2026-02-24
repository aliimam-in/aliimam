/**
 * Auto-generated logo component: Cast (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CastLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CastLogo = React.forwardRef<SVGSVGElement, CastLogoProps>(
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
      <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" y1="20" x2="2.01" y2="20"/>
    </svg>
  )
);

CastLogo.displayName = "CastLogo";

export const CastLogoMetadata = {
  id: "cast",
  baseId: "cast",
  variant: "default",
  name: "Cast",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CastLogo;
