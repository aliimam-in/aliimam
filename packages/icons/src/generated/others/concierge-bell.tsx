/**
 * Auto-generated logo component: Concierge Bell (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ConciergeBellLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ConciergeBellLogo = React.forwardRef<SVGSVGElement, ConciergeBellLogoProps>(
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
      <path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" />
  <path d="M20 16a8 8 0 1 0-16 0" />
  <path d="M12 4v4" />
  <path d="M10 4h4" />
    </svg>
  )
);

ConciergeBellLogo.displayName = "ConciergeBellLogo";

export const ConciergeBellLogoMetadata = {
  id: "concierge-bell",
  baseId: "concierge-bell",
  variant: "default",
  name: "Concierge Bell",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ConciergeBellLogo;
