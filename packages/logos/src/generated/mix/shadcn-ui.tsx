/**
 * Auto-generated logo component: Shadcn Ui (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShadcnUiLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ShadcnUiLogo = React.forwardRef<SVGSVGElement, ShadcnUiLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" /><path fill="none" stroke="currentColor" strokeWidth="25" strokeLinecap="round" d="M208 128l-80 80M192 40L40 192" />
    </svg>
  )
);

ShadcnUiLogo.displayName = "ShadcnUiLogo";

export const ShadcnUiLogoMetadata = {
  id: "shadcn-ui",
  baseId: "shadcn-ui",
  variant: "default",
  name: "Shadcn Ui",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default ShadcnUiLogo;
