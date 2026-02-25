/**
 * Auto-generated logo component: Point Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointFilledLogo = React.forwardRef<SVGSVGElement, PointFilledLogoProps>(
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
      <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
    </svg>
  )
);

PointFilledLogo.displayName = "PointFilledLogo";

export const PointFilledLogoMetadata = {
  id: "point-filled",
  baseId: "point-filled",
  variant: "default",
  name: "Point Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointFilledLogo;
