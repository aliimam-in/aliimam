/**
 * Auto-generated logo component: Smartphone Nfc (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SmartphoneNfcLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SmartphoneNfcLogo = React.forwardRef<SVGSVGElement, SmartphoneNfcLogoProps>(
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
      <rect width="7" height="12" x="2" y="6" rx="1" />
  <path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" />
  <path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" />
  <path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
    </svg>
  )
);

SmartphoneNfcLogo.displayName = "SmartphoneNfcLogo";

export const SmartphoneNfcLogoMetadata = {
  id: "smartphone-nfc",
  baseId: "smartphone-nfc",
  variant: "default",
  name: "Smartphone Nfc",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SmartphoneNfcLogo;
