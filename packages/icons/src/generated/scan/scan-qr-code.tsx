/**
 * Auto-generated logo component: Scan Qr Code (default)
 * Category: scan
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScanQrCodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScanQrCodeLogo = React.forwardRef<SVGSVGElement, ScanQrCodeLogoProps>(
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
      <path d="M17 12v4a1 1 0 0 1-1 1h-4" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M17 8V7" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M7 17h.01" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <rect x="7" y="7" width="5" height="5" rx="1" />
    </svg>
  )
);

ScanQrCodeLogo.displayName = "ScanQrCodeLogo";

export const ScanQrCodeLogoMetadata = {
  id: "scan-qr-code",
  baseId: "scan-qr-code",
  variant: "default",
  name: "Scan Qr Code",
  category: "scan",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScanQrCodeLogo;
