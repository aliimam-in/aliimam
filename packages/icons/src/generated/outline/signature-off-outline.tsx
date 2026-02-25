/**
 * Auto-generated logo component: Signature Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignatureOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignatureOffOutlineLogo = React.forwardRef<SVGSVGElement, SignatureOffOutlineLogoProps>(
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
      <path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -.394 -.017 -.735 -.05 -1.033m-1.95 -1.967c-1 0 -2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.219 0 .708 -.341 1.231 -.742m3.769 -.258c.303 .245 .64 .677 1 1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SignatureOffOutlineLogo.displayName = "SignatureOffOutlineLogo";

export const SignatureOffOutlineLogoMetadata = {
  id: "signature-off-outline",
  baseId: "signature-off-outline",
  variant: "default",
  name: "Signature Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignatureOffOutlineLogo;
