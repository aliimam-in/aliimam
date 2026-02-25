/**
 * Auto-generated logo component: Flag Triangle Left (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagTriangleLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagTriangleLeftLogo = React.forwardRef<SVGSVGElement, FlagTriangleLeftLogoProps>(
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
      <path d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5" />
    </svg>
  )
);

FlagTriangleLeftLogo.displayName = "FlagTriangleLeftLogo";

export const FlagTriangleLeftLogoMetadata = {
  id: "flag-triangle-left",
  baseId: "flag-triangle-left",
  variant: "default",
  name: "Flag Triangle Left",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagTriangleLeftLogo;
