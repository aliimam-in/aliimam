/**
 * Auto-generated logo component: Network Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NetworkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NetworkOutlineLogo = React.forwardRef<SVGSVGElement, NetworkOutlineLogoProps>(
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
      <path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
  <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
  <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
  <path d="M6 9h12" />
  <path d="M3 20h7" />
  <path d="M14 20h7" />
  <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M12 15v3" />
    </svg>
  )
);

NetworkOutlineLogo.displayName = "NetworkOutlineLogo";

export const NetworkOutlineLogoMetadata = {
  id: "network-outline",
  baseId: "network-outline",
  variant: "default",
  name: "Network Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NetworkOutlineLogo;
