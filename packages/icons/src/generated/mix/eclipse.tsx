/**
 * Auto-generated logo component: Eclipse (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EclipseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EclipseLogo = React.forwardRef<SVGSVGElement, EclipseLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
);

EclipseLogo.displayName = "EclipseLogo";

export const EclipseLogoMetadata = {
  id: "eclipse",
  baseId: "eclipse",
  variant: "default",
  name: "Eclipse",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EclipseLogo;
