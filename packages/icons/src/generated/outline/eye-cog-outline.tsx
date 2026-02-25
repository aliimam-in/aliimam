/**
 * Auto-generated logo component: Eye Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeCogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeCogOutlineLogo = React.forwardRef<SVGSVGElement, EyeCogOutlineLogoProps>(
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
  <path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
  <path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
    </svg>
  )
);

EyeCogOutlineLogo.displayName = "EyeCogOutlineLogo";

export const EyeCogOutlineLogoMetadata = {
  id: "eye-cog-outline",
  baseId: "eye-cog-outline",
  variant: "default",
  name: "Eye Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeCogOutlineLogo;
