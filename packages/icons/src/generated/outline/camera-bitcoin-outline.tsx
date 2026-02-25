/**
 * Auto-generated logo component: Camera Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CameraBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CameraBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, CameraBitcoinOutlineLogoProps>(
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
      <path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" />
  <path d="M14.477 11.307a3 3 0 1 0 -2.477 4.693" />
  <path d="M17 21v-6" />
  <path d="M19 15v-1.5" />
  <path d="M19 22.5v-1.5" />
  <path d="M17 18h3" />
  <path d="M19 18h.5a1.5 1.5 0 0 1 0 3h-3.5" />
  <path d="M19 18h.5a1.5 1.5 0 0 0 0 -3h-3.5" />
    </svg>
  )
);

CameraBitcoinOutlineLogo.displayName = "CameraBitcoinOutlineLogo";

export const CameraBitcoinOutlineLogoMetadata = {
  id: "camera-bitcoin-outline",
  baseId: "camera-bitcoin-outline",
  variant: "default",
  name: "Camera Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CameraBitcoinOutlineLogo;
