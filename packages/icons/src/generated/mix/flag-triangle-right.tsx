/**
 * Auto-generated logo component: Flag Triangle Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagTriangleRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagTriangleRightLogo = React.forwardRef<SVGSVGElement, FlagTriangleRightLogoProps>(
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
      <path d="M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5" />
    </svg>
  )
);

FlagTriangleRightLogo.displayName = "FlagTriangleRightLogo";

export const FlagTriangleRightLogoMetadata = {
  id: "flag-triangle-right",
  baseId: "flag-triangle-right",
  variant: "default",
  name: "Flag Triangle Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagTriangleRightLogo;
