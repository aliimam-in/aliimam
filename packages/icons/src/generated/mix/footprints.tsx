/**
 * Auto-generated logo component: Footprints (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FootprintsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FootprintsLogo = React.forwardRef<SVGSVGElement, FootprintsLogoProps>(
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
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
  <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
  <path d="M16 17h4" />
  <path d="M4 13h4" />
    </svg>
  )
);

FootprintsLogo.displayName = "FootprintsLogo";

export const FootprintsLogoMetadata = {
  id: "footprints",
  baseId: "footprints",
  variant: "default",
  name: "Footprints",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FootprintsLogo;
