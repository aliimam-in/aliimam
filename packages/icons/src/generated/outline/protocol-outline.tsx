/**
 * Auto-generated logo component: Protocol Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ProtocolOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ProtocolOutlineLogo = React.forwardRef<SVGSVGElement, ProtocolOutlineLogoProps>(
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
      <path d="M15 6l-7 12" />
  <path d="M20 6l-7 12" />
  <path d="M5 14v.015" />
  <path d="M5 10.015v.015" />
    </svg>
  )
);

ProtocolOutlineLogo.displayName = "ProtocolOutlineLogo";

export const ProtocolOutlineLogoMetadata = {
  id: "protocol-outline",
  baseId: "protocol-outline",
  variant: "default",
  name: "Protocol Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ProtocolOutlineLogo;
