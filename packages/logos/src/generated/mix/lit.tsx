/**
 * Auto-generated logo component: Lit (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LitLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LitLogo = React.forwardRef<SVGSVGElement, LitLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#00E8FF" d="m64 192 25.926-44.727 38.233-19.114 63.974 63.974 10.833 61.754L192 320l-64-64-38.074-25.615z" /><path d="M128 256V128l64-64v128l-64 64ZM0 256l64 64 9.202-60.602L64 192l-37.542 23.71L0 256Z" fill="#283198" /><path d="M64 192V64l64-64v128l-64 64Zm128 128V192l64-64v128l-64 64ZM0 256V128l64 64-64 64Z" fill="#324FFF" /><path fill="#0FF" d="M64 320V192l64 64z" />
    </svg>
  )
);

LitLogo.displayName = "LitLogo";

export const LitLogoMetadata = {
  id: "lit",
  baseId: "lit",
  variant: "default",
  name: "Lit",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 320",
} as const;

export default LitLogo;
