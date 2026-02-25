/**
 * Auto-generated logo component: Scaling (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScalingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScalingLogo = React.forwardRef<SVGSVGElement, ScalingLogoProps>(
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
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M14 15H9v-5" />
  <path d="M16 3h5v5" />
  <path d="M21 3 9 15" />
    </svg>
  )
);

ScalingLogo.displayName = "ScalingLogo";

export const ScalingLogoMetadata = {
  id: "scaling",
  baseId: "scaling",
  variant: "default",
  name: "Scaling",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScalingLogo;
