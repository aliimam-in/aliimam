/**
 * Auto-generated logo component: Eye Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeExclamationOutlineLogo = React.forwardRef<SVGSVGElement, EyeExclamationOutlineLogoProps>(
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
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M15.03 17.478a8.797 8.797 0 0 1 -3.03 .522c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a20.48 20.48 0 0 1 -.258 .419" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

EyeExclamationOutlineLogo.displayName = "EyeExclamationOutlineLogo";

export const EyeExclamationOutlineLogoMetadata = {
  id: "eye-exclamation-outline",
  baseId: "eye-exclamation-outline",
  variant: "default",
  name: "Eye Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeExclamationOutlineLogo;
