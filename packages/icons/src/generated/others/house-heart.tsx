/**
 * Auto-generated logo component: House Heart (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HouseHeartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HouseHeartLogo = React.forwardRef<SVGSVGElement, HouseHeartLogoProps>(
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
      <path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  )
);

HouseHeartLogo.displayName = "HouseHeartLogo";

export const HouseHeartLogoMetadata = {
  id: "house-heart",
  baseId: "house-heart",
  variant: "default",
  name: "House Heart",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HouseHeartLogo;
