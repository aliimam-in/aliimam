/**
 * Auto-generated logo component: Corner Down Right (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerDownRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerDownRightLogo = React.forwardRef<SVGSVGElement, CornerDownRightLogoProps>(
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
      <polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/>
    </svg>
  )
);

CornerDownRightLogo.displayName = "CornerDownRightLogo";

export const CornerDownRightLogoMetadata = {
  id: "corner-down-right",
  baseId: "corner-down-right",
  variant: "default",
  name: "Corner Down Right",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerDownRightLogo;
