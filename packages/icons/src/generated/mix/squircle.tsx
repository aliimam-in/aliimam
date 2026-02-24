/**
 * Auto-generated logo component: Squircle (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquircleLogo = React.forwardRef<SVGSVGElement, SquircleLogoProps>(
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
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
    </svg>
  )
);

SquircleLogo.displayName = "SquircleLogo";

export const SquircleLogoMetadata = {
  id: "squircle",
  baseId: "squircle",
  variant: "default",
  name: "Squircle",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquircleLogo;
