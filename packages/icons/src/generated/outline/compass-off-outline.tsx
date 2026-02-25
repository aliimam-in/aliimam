/**
 * Auto-generated logo component: Compass Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CompassOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CompassOffOutlineLogo = React.forwardRef<SVGSVGElement, CompassOffOutlineLogoProps>(
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
      <path d="M13 9l3 -1l-1 3m-1 3l-6 2l2 -6" />
  <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
  <path d="M12 3v2" />
  <path d="M12 19v2" />
  <path d="M3 12h2" />
  <path d="M19 12h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CompassOffOutlineLogo.displayName = "CompassOffOutlineLogo";

export const CompassOffOutlineLogoMetadata = {
  id: "compass-off-outline",
  baseId: "compass-off-outline",
  variant: "default",
  name: "Compass Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CompassOffOutlineLogo;
