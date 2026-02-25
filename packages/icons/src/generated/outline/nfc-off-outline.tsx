/**
 * Auto-generated logo component: Nfc Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NfcOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NfcOffOutlineLogo = React.forwardRef<SVGSVGElement, NfcOffOutlineLogoProps>(
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
      <path d="M11 20a3 3 0 0 1 -3 -3v-9" />
  <path d="M13 4a3 3 0 0 1 3 3v5m0 4v2l-5 -5" />
  <path d="M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116a2.99 2.99 0 0 1 -2.127 .884h-10a3 3 0 0 1 -3 -3v-10c0 -.83 .337 -1.582 .882 -2.125" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

NfcOffOutlineLogo.displayName = "NfcOffOutlineLogo";

export const NfcOffOutlineLogoMetadata = {
  id: "nfc-off-outline",
  baseId: "nfc-off-outline",
  variant: "default",
  name: "Nfc Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NfcOffOutlineLogo;
