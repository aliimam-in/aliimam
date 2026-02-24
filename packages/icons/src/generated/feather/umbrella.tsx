/**
 * Auto-generated logo component: Umbrella (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UmbrellaLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UmbrellaLogo = React.forwardRef<SVGSVGElement, UmbrellaLogoProps>(
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
      <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
    </svg>
  )
);

UmbrellaLogo.displayName = "UmbrellaLogo";

export const UmbrellaLogoMetadata = {
  id: "umbrella",
  baseId: "umbrella",
  variant: "default",
  name: "Umbrella",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UmbrellaLogo;
