/**
 * Auto-generated logo component: Leafy Green (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LeafyGreenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LeafyGreenLogo = React.forwardRef<SVGSVGElement, LeafyGreenLogoProps>(
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
      <path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" />
  <path d="M2 22 17 7" />
    </svg>
  )
);

LeafyGreenLogo.displayName = "LeafyGreenLogo";

export const LeafyGreenLogoMetadata = {
  id: "leafy-green",
  baseId: "leafy-green",
  variant: "default",
  name: "Leafy Green",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LeafyGreenLogo;
