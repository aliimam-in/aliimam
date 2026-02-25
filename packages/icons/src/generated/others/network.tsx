/**
 * Auto-generated logo component: Network (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NetworkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NetworkLogo = React.forwardRef<SVGSVGElement, NetworkLogoProps>(
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
  <rect x="2" y="16" width="6" height="6" rx="1" />
  <rect x="9" y="2" width="6" height="6" rx="1" />
  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
  <path d="M12 12V8" />
    </svg>
  )
);

NetworkLogo.displayName = "NetworkLogo";

export const NetworkLogoMetadata = {
  id: "network",
  baseId: "network",
  variant: "default",
  name: "Network",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NetworkLogo;
