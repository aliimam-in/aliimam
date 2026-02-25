/**
 * Auto-generated logo component: Spline Pointer (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SplinePointerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SplinePointerLogo = React.forwardRef<SVGSVGElement, SplinePointerLogoProps>(
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
      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
  <path d="M5 17A12 12 0 0 1 17 5" />
  <circle cx="19" cy="5" r="2" />
  <circle cx="5" cy="19" r="2" />
    </svg>
  )
);

SplinePointerLogo.displayName = "SplinePointerLogo";

export const SplinePointerLogoMetadata = {
  id: "spline-pointer",
  baseId: "spline-pointer",
  variant: "default",
  name: "Spline Pointer",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SplinePointerLogo;
