/**
 * Auto-generated logo component: Solidity (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SolidityLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SolidityLogo = React.forwardRef<SVGSVGElement, SolidityLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1300 1300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M773.772 253.308 643.068 485.61H381.842l130.614-232.302h261.316" opacity=".45" />
  <path d="M643.068 485.61h261.318L773.772 253.308H512.456L643.068 485.61z" opacity=".6" />
  <path d="M512.456 717.822 643.068 485.61 512.456 253.308 381.842 485.61l130.614 232.212z" opacity=".8" />
  <path d="m513.721 1066.275 130.704-232.303h261.318l-130.705 232.303H513.721" opacity=".45" />
  <path d="M644.424 833.973H383.107l130.613 232.303h261.317L644.424 833.973z" opacity=".6" />
  <path d="M775.038 601.761 644.424 833.973l130.614 232.303 130.704-232.303-130.704-232.212z" opacity=".8" />
    </svg>
  )
);

SolidityLogo.displayName = "SolidityLogo";

export const SolidityLogoMetadata = {
  id: "solidity",
  baseId: "solidity",
  variant: "default",
  name: "Solidity",
  category: "mix",
  tags: [],
  viewBox: "0 0 1300 1300",
} as const;

export default SolidityLogo;
