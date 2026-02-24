/**
 * Auto-generated logo component: Step Forward (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StepForwardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StepForwardLogo = React.forwardRef<SVGSVGElement, StepForwardLogoProps>(
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
      <path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
  <path d="M3 4v16" />
    </svg>
  )
);

StepForwardLogo.displayName = "StepForwardLogo";

export const StepForwardLogoMetadata = {
  id: "step-forward",
  baseId: "step-forward",
  variant: "default",
  name: "Step Forward",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StepForwardLogo;
