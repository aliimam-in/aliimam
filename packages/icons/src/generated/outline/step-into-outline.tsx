/**
 * Auto-generated logo component: Step Into Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StepIntoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StepIntoOutlineLogo = React.forwardRef<SVGSVGElement, StepIntoOutlineLogoProps>(
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
      <path d="M12 3l0 12" />
  <path d="M16 11l-4 4" />
  <path d="M8 11l4 4" />
  <path d="M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

StepIntoOutlineLogo.displayName = "StepIntoOutlineLogo";

export const StepIntoOutlineLogoMetadata = {
  id: "step-into-outline",
  baseId: "step-into-outline",
  variant: "default",
  name: "Step Into Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StepIntoOutlineLogo;
