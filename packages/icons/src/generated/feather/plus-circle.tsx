/**
 * Auto-generated logo component: Plus Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlusCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlusCircleLogo = React.forwardRef<SVGSVGElement, PlusCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  )
);

PlusCircleLogo.displayName = "PlusCircleLogo";

export const PlusCircleLogoMetadata = {
  id: "plus-circle",
  baseId: "plus-circle",
  variant: "default",
  name: "Plus Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlusCircleLogo;
