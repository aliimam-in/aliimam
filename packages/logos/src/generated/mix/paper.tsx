/**
 * Auto-generated logo component: Paper (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PaperLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const PaperLogo = React.forwardRef<SVGSVGElement, PaperLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 39 39"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z" fill="#81ADEC" />
    </svg>
  )
);

PaperLogo.displayName = "PaperLogo";

export const PaperLogoMetadata = {
  id: "paper",
  baseId: "paper",
  variant: "default",
  name: "Paper",
  category: "mix",
  tags: [],
  viewBox: "0 0 39 39",
} as const;

export default PaperLogo;
