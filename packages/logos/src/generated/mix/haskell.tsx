/**
 * Auto-generated logo component: Haskell (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HaskellLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HaskellLogo = React.forwardRef<SVGSVGElement, HaskellLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#453a62" d="M9 43H1l12-18L1 7h8l12 18z" /><path fill="#5e5086" d="M20 7h-8l12 18-12 18h8l8.16-12.24L36 43h8z" /><path fill="#8f4e8b" d="M34.338 24H47v-6H30.338zM40.338 33H47v-6H36.338z" />
    </svg>
  )
);

HaskellLogo.displayName = "HaskellLogo";

export const HaskellLogoMetadata = {
  id: "haskell",
  baseId: "haskell",
  variant: "default",
  name: "Haskell",
  category: "mix",
  tags: [],
  viewBox: "0 0 48 48",
} as const;

export default HaskellLogo;
