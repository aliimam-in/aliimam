/**
 * Auto-generated logo component: Registered Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RegisteredOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RegisteredOutlineLogo = React.forwardRef<SVGSVGElement, RegisteredOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M10 15v-6h2a2 2 0 1 1 0 4h-2" />
  <path d="M14 15l-2 -2" />
    </svg>
  )
);

RegisteredOutlineLogo.displayName = "RegisteredOutlineLogo";

export const RegisteredOutlineLogoMetadata = {
  id: "registered-outline",
  baseId: "registered-outline",
  variant: "default",
  name: "Registered Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RegisteredOutlineLogo;
