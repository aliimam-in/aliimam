/**
 * Auto-generated logo component: Siren (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SirenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SirenLogo = React.forwardRef<SVGSVGElement, SirenLogoProps>(
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
      <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
  <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
  <path d="M21 12h1" />
  <path d="M18.5 4.5 18 5" />
  <path d="M2 12h1" />
  <path d="M12 2v1" />
  <path d="m4.929 4.929.707.707" />
  <path d="M12 12v6" />
    </svg>
  )
);

SirenLogo.displayName = "SirenLogo";

export const SirenLogoMetadata = {
  id: "siren",
  baseId: "siren",
  variant: "default",
  name: "Siren",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SirenLogo;
