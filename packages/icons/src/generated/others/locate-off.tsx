/**
 * Auto-generated logo component: Locate Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocateOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocateOffLogo = React.forwardRef<SVGSVGElement, LocateOffLogoProps>(
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
      <path d="M12 19v3" />
  <path d="M12 2v3" />
  <path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" />
  <path d="M19 12h3" />
  <path d="M2 12h3" />
  <path d="m2 2 20 20" />
  <path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" />
    </svg>
  )
);

LocateOffLogo.displayName = "LocateOffLogo";

export const LocateOffLogoMetadata = {
  id: "locate-off",
  baseId: "locate-off",
  variant: "default",
  name: "Locate Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocateOffLogo;
