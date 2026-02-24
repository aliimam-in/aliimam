/**
 * Auto-generated logo component: Tangent (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TangentLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TangentLogo = React.forwardRef<SVGSVGElement, TangentLogoProps>(
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
      <circle cx="17" cy="4" r="2" />
  <path d="M15.59 5.41 5.41 15.59" />
  <circle cx="4" cy="17" r="2" />
  <path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
    </svg>
  )
);

TangentLogo.displayName = "TangentLogo";

export const TangentLogoMetadata = {
  id: "tangent",
  baseId: "tangent",
  variant: "default",
  name: "Tangent",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TangentLogo;
