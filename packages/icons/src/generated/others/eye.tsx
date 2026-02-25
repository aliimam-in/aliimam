/**
 * Auto-generated logo component: Eye (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeLogo = React.forwardRef<SVGSVGElement, EyeLogoProps>(
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
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
    </svg>
  )
);

EyeLogo.displayName = "EyeLogo";

export const EyeLogoMetadata = {
  id: "eye",
  baseId: "eye",
  variant: "default",
  name: "Eye",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeLogo;
