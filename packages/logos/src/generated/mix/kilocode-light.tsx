/**
 * Auto-generated logo component: Kilocode Light (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KilocodeLightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const KilocodeLightLogo = React.forwardRef<SVGSVGElement, KilocodeLightLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23,26v-2h3v-5l-2-2h-4v2h-3v5l2,2h4ZM20,20h3v3h-3v-3Z" /><rect x="12" y="17" width="3" height="3" /><polygon points="26 12 23 12 23 9 20 6 17 6 17 9 20 9 20 12 17 12 17 15 26 15 26 12" /><path d="M0,0v32h32V0H0ZM29,29H3V3h26v26Z" /><polygon points="15 26 15 23 9 23 9 17 6 17 6 23.1875 8.8125 26 15 26" /><rect x="12" y="6" width="3" height="3" /><polygon points="9 12 12 12 12 15 15 15 15 12 12 9 9 9 9 6 6 6 6 15 9 15 9 12" />
    </svg>
  )
);

KilocodeLightLogo.displayName = "KilocodeLightLogo";

export const KilocodeLightLogoMetadata = {
  id: "kilocode-light",
  baseId: "kilocode-light",
  variant: "default",
  name: "Kilocode Light",
  category: "mix",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default KilocodeLightLogo;
