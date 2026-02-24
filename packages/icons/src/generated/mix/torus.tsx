/**
 * Auto-generated logo component: Torus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TorusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TorusLogo = React.forwardRef<SVGSVGElement, TorusLogoProps>(
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
      <ellipse cx="12" cy="11" rx="3" ry="2" />
  <ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
    </svg>
  )
);

TorusLogo.displayName = "TorusLogo";

export const TorusLogoMetadata = {
  id: "torus",
  baseId: "torus",
  variant: "default",
  name: "Torus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TorusLogo;
