/**
 * Auto-generated logo component: Front (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FrontLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FrontLogo = React.forwardRef<SVGSVGElement, FrontLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 950 950"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="475" cy="475" r="425" fill="white" />
  <path d="M308 308.2C308 262.25 345.25 225 391.2 225H658V343.4C658 366.375 639.375 385 616.4 385H508C485.909 385 468 402.909 468 425V683.4C468 706.375 449.375 725 426.4 725H308V308.2Z" fill="#001B38" />
  <circle cx="509" cy="426" r="108" transform="rotate(90 509 426)" fill="url(#paint0_linear)" />
  <circle opacity="0.5" cx="509" cy="426" r="108" transform="rotate(90 509 426)" fill="url(#paint1_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="428.041" y1="502.06" x2="591.574" y2="339.649" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF0057" stopOpacity="0.16" />
      <stop offset="0.861354" stopColor="#FF0057" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="428.041" y1="502.06" x2="591.574" y2="339.649" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF0057" stopOpacity="0.16" />
      <stop offset="0.861354" stopColor="#FF0057" />
    </linearGradient>
  </defs>
    </svg>
  )
);

FrontLogo.displayName = "FrontLogo";

export const FrontLogoMetadata = {
  id: "front",
  baseId: "front",
  variant: "default",
  name: "Front",
  category: "mix",
  tags: [],
  viewBox: "0 0 950 950",
} as const;

export default FrontLogo;
