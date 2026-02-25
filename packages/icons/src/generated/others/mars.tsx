/**
 * Auto-generated logo component: Mars (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MarsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MarsLogo = React.forwardRef<SVGSVGElement, MarsLogoProps>(
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
      <path d="M16 3h5v5" />
  <path d="m21 3-6.75 6.75" />
  <circle cx="10" cy="14" r="6" />
    </svg>
  )
);

MarsLogo.displayName = "MarsLogo";

export const MarsLogoMetadata = {
  id: "mars",
  baseId: "mars",
  variant: "default",
  name: "Mars",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MarsLogo;
