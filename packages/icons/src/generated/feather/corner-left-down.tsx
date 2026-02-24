/**
 * Auto-generated logo component: Corner Left Down (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerLeftDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerLeftDownLogo = React.forwardRef<SVGSVGElement, CornerLeftDownLogoProps>(
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
      <polyline points="14 15 9 20 4 15"/><path d="M20 4h-7a4 4 0 0 0-4 4v12"/>
    </svg>
  )
);

CornerLeftDownLogo.displayName = "CornerLeftDownLogo";

export const CornerLeftDownLogoMetadata = {
  id: "corner-left-down",
  baseId: "corner-left-down",
  variant: "default",
  name: "Corner Left Down",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerLeftDownLogo;
