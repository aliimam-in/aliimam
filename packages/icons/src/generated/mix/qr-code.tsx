/**
 * Auto-generated logo component: Qr Code (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface QrCodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const QrCodeLogo = React.forwardRef<SVGSVGElement, QrCodeLogoProps>(
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
      <rect width="5" height="5" x="3" y="3" rx="1" />
  <rect width="5" height="5" x="16" y="3" rx="1" />
  <rect width="5" height="5" x="3" y="16" rx="1" />
  <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
  <path d="M21 21v.01" />
  <path d="M12 7v3a2 2 0 0 1-2 2H7" />
  <path d="M3 12h.01" />
  <path d="M12 3h.01" />
  <path d="M12 16v.01" />
  <path d="M16 12h1" />
  <path d="M21 12v.01" />
  <path d="M12 21v-1" />
    </svg>
  )
);

QrCodeLogo.displayName = "QrCodeLogo";

export const QrCodeLogoMetadata = {
  id: "qr-code",
  baseId: "qr-code",
  variant: "default",
  name: "Qr Code",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default QrCodeLogo;
