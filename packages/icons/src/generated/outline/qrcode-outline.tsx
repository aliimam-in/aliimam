/**
 * Auto-generated logo component: Qrcode Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface QrcodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const QrcodeOutlineLogo = React.forwardRef<SVGSVGElement, QrcodeOutlineLogoProps>(
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
      <path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M7 17l0 .01" />
  <path d="M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M7 7l0 .01" />
  <path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M17 7l0 .01" />
  <path d="M14 14l3 0" />
  <path d="M20 14l0 .01" />
  <path d="M14 14l0 3" />
  <path d="M14 20l3 0" />
  <path d="M17 17l3 0" />
  <path d="M20 17l0 3" />
    </svg>
  )
);

QrcodeOutlineLogo.displayName = "QrcodeOutlineLogo";

export const QrcodeOutlineLogoMetadata = {
  id: "qrcode-outline",
  baseId: "qrcode-outline",
  variant: "default",
  name: "Qrcode Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default QrcodeOutlineLogo;
