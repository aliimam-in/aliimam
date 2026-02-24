/**
 * Auto-generated logo component: Mars Stroke (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MarsStrokeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MarsStrokeLogo = React.forwardRef<SVGSVGElement, MarsStrokeLogoProps>(
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
      <path d="m14 6 4 4" />
  <path d="M17 3h4v4" />
  <path d="m21 3-7.75 7.75" />
  <circle cx="9" cy="15" r="6" />
    </svg>
  )
);

MarsStrokeLogo.displayName = "MarsStrokeLogo";

export const MarsStrokeLogoMetadata = {
  id: "mars-stroke",
  baseId: "mars-stroke",
  variant: "default",
  name: "Mars Stroke",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MarsStrokeLogo;
