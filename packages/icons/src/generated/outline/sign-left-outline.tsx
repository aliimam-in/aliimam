/**
 * Auto-generated logo component: Sign Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignLeftOutlineLogo = React.forwardRef<SVGSVGElement, SignLeftOutlineLogoProps>(
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
      <path d="M16 21h-4" />
  <path d="M14 21v-10" />
  <path d="M14 6v-3" />
  <path d="M18 6h-10l-2 2.5l2 2.5h10l0 -5" />
    </svg>
  )
);

SignLeftOutlineLogo.displayName = "SignLeftOutlineLogo";

export const SignLeftOutlineLogoMetadata = {
  id: "sign-left-outline",
  baseId: "sign-left-outline",
  variant: "default",
  name: "Sign Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignLeftOutlineLogo;
