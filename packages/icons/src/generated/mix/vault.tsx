/**
 * Auto-generated logo component: Vault (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VaultLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VaultLogo = React.forwardRef<SVGSVGElement, VaultLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  <path d="m7.9 7.9 2.7 2.7" />
  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
  <path d="m13.4 10.6 2.7-2.7" />
  <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
  <path d="m7.9 16.1 2.7-2.7" />
  <circle cx="16.5" cy="16.5" r=".5" fill="currentColor" />
  <path d="m13.4 13.4 2.7 2.7" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);

VaultLogo.displayName = "VaultLogo";

export const VaultLogoMetadata = {
  id: "vault",
  baseId: "vault",
  variant: "default",
  name: "Vault",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VaultLogo;
