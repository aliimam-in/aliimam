/**
 * Auto-generated logo component: Nfc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NfcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NfcOutlineLogo = React.forwardRef<SVGSVGElement, NfcOutlineLogoProps>(
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
      <path d="M11 20a3 3 0 0 1 -3 -3v-11l5 5" />
  <path d="M13 4a3 3 0 0 1 3 3v11l-5 -5" />
  <path d="M4 7a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3l0 -10" />
    </svg>
  )
);

NfcOutlineLogo.displayName = "NfcOutlineLogo";

export const NfcOutlineLogoMetadata = {
  id: "nfc-outline",
  baseId: "nfc-outline",
  variant: "default",
  name: "Nfc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NfcOutlineLogo;
