/**
 * Auto-generated logo component: Umbrella Closed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UmbrellaClosedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UmbrellaClosedOutlineLogo = React.forwardRef<SVGSVGElement, UmbrellaClosedOutlineLogoProps>(
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
      <path d="M9 16l3 -13l3 13l-6 0" />
  <path d="M12 16v3c0 2.667 4 2.667 4 0" />
    </svg>
  )
);

UmbrellaClosedOutlineLogo.displayName = "UmbrellaClosedOutlineLogo";

export const UmbrellaClosedOutlineLogoMetadata = {
  id: "umbrella-closed-outline",
  baseId: "umbrella-closed-outline",
  variant: "default",
  name: "Umbrella Closed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UmbrellaClosedOutlineLogo;
