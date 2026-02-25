/**
 * Auto-generated logo component: Baggage Claim (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BaggageClaimLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BaggageClaimLogo = React.forwardRef<SVGSVGElement, BaggageClaimLogoProps>(
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
      <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
  <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
  <rect width="13" height="8" x="8" y="6" rx="1" />
  <circle cx="18" cy="20" r="2" />
  <circle cx="9" cy="20" r="2" />
    </svg>
  )
);

BaggageClaimLogo.displayName = "BaggageClaimLogo";

export const BaggageClaimLogoMetadata = {
  id: "baggage-claim",
  baseId: "baggage-claim",
  variant: "default",
  name: "Baggage Claim",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BaggageClaimLogo;
