/**
 * Auto-generated logo component: Pen Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PenOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PenOffLogo = React.forwardRef<SVGSVGElement, PenOffLogoProps>(
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
      <path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
  <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
  <path d="m2 2 20 20" />
    </svg>
  )
);

PenOffLogo.displayName = "PenOffLogo";

export const PenOffLogoMetadata = {
  id: "pen-off",
  baseId: "pen-off",
  variant: "default",
  name: "Pen Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PenOffLogo;
