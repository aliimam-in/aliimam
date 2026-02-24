/**
 * Auto-generated logo component: Ethernet Port (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EthernetPortLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EthernetPortLogo = React.forwardRef<SVGSVGElement, EthernetPortLogoProps>(
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
      <path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" />
  <path d="M6 8v1" />
  <path d="M10 8v1" />
  <path d="M14 8v1" />
  <path d="M18 8v1" />
    </svg>
  )
);

EthernetPortLogo.displayName = "EthernetPortLogo";

export const EthernetPortLogoMetadata = {
  id: "ethernet-port",
  baseId: "ethernet-port",
  variant: "default",
  name: "Ethernet Port",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EthernetPortLogo;
