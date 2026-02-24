/**
 * Auto-generated logo component: Eye Off (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeOffLogo = React.forwardRef<SVGSVGElement, EyeOffLogoProps>(
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
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )
);

EyeOffLogo.displayName = "EyeOffLogo";

export const EyeOffLogoMetadata = {
  id: "eye-off",
  baseId: "eye-off",
  variant: "default",
  name: "Eye Off",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeOffLogo;
