/**
 * Auto-generated logo component: Certificate 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Certificate2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Certificate2OutlineLogo = React.forwardRef<SVGSVGElement, Certificate2OutlineLogoProps>(
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
      <path d="M9 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M10 7h4" />
  <path d="M10 18v4l2 -1l2 1v-4" />
  <path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
    </svg>
  )
);

Certificate2OutlineLogo.displayName = "Certificate2OutlineLogo";

export const Certificate2OutlineLogoMetadata = {
  id: "certificate-2-outline",
  baseId: "certificate-2-outline",
  variant: "default",
  name: "Certificate 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Certificate2OutlineLogo;
