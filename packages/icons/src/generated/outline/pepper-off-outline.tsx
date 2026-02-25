/**
 * Auto-generated logo component: Pepper Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PepperOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PepperOffOutlineLogo = React.forwardRef<SVGSVGElement, PepperOffOutlineLogoProps>(
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
      <path d="M12.59 12.59c-.77 1.418 -2.535 2.41 -4.59 2.41c-2.761 0 -5 -1.79 -5 -4a8 8 0 0 0 13.643 5.67m1.64 -2.357a7.97 7.97 0 0 0 .717 -3.313a3 3 0 0 0 -5.545 -1.59" />
  <path d="M16 8c0 -2 2 -4 4 -4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PepperOffOutlineLogo.displayName = "PepperOffOutlineLogo";

export const PepperOffOutlineLogoMetadata = {
  id: "pepper-off-outline",
  baseId: "pepper-off-outline",
  variant: "default",
  name: "Pepper Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PepperOffOutlineLogo;
