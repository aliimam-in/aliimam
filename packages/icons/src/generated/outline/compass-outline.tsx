/**
 * Auto-generated logo component: Compass Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CompassOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CompassOutlineLogo = React.forwardRef<SVGSVGElement, CompassOutlineLogoProps>(
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
      <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 3l0 2" />
  <path d="M12 19l0 2" />
  <path d="M3 12l2 0" />
  <path d="M19 12l2 0" />
    </svg>
  )
);

CompassOutlineLogo.displayName = "CompassOutlineLogo";

export const CompassOutlineLogoMetadata = {
  id: "compass-outline",
  baseId: "compass-outline",
  variant: "default",
  name: "Compass Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CompassOutlineLogo;
