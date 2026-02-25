/**
 * Auto-generated logo component: Heart Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartOffLogo = React.forwardRef<SVGSVGElement, HeartOffLogoProps>(
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
      <path d="M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655" />
  <path d="m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761" />
  <path d="m2 2 20 20" />
    </svg>
  )
);

HeartOffLogo.displayName = "HeartOffLogo";

export const HeartOffLogoMetadata = {
  id: "heart-off",
  baseId: "heart-off",
  variant: "default",
  name: "Heart Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartOffLogo;
