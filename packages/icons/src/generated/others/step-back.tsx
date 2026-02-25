/**
 * Auto-generated logo component: Step Back (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StepBackLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StepBackLogo = React.forwardRef<SVGSVGElement, StepBackLogoProps>(
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
      <path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M21 20V4" />
    </svg>
  )
);

StepBackLogo.displayName = "StepBackLogo";

export const StepBackLogoMetadata = {
  id: "step-back",
  baseId: "step-back",
  variant: "default",
  name: "Step Back",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StepBackLogo;
