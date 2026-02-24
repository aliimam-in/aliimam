/**
 * Auto-generated logo component: Beaker (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BeakerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BeakerLogo = React.forwardRef<SVGSVGElement, BeakerLogoProps>(
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
      <path d="M4.5 3h15" />
  <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
  <path d="M6 14h12" />
    </svg>
  )
);

BeakerLogo.displayName = "BeakerLogo";

export const BeakerLogoMetadata = {
  id: "beaker",
  baseId: "beaker",
  variant: "default",
  name: "Beaker",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BeakerLogo;
