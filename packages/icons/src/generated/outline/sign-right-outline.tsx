/**
 * Auto-generated logo component: Sign Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignRightOutlineLogo = React.forwardRef<SVGSVGElement, SignRightOutlineLogoProps>(
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
      <path d="M8 21h4" />
  <path d="M10 21v-10" />
  <path d="M10 6v-3" />
  <path d="M6 6h10l2 2.5l-2 2.5h-10l0 -5" />
    </svg>
  )
);

SignRightOutlineLogo.displayName = "SignRightOutlineLogo";

export const SignRightOutlineLogoMetadata = {
  id: "sign-right-outline",
  baseId: "sign-right-outline",
  variant: "default",
  name: "Sign Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignRightOutlineLogo;
