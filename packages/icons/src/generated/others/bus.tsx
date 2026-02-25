/**
 * Auto-generated logo component: Bus (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BusLogo = React.forwardRef<SVGSVGElement, BusLogoProps>(
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
      <path d="M8 6v6" />
  <path d="M15 6v6" />
  <path d="M2 12h19.6" />
  <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
  <circle cx="7" cy="18" r="2" />
  <path d="M9 18h5" />
  <circle cx="16" cy="18" r="2" />
    </svg>
  )
);

BusLogo.displayName = "BusLogo";

export const BusLogoMetadata = {
  id: "bus",
  baseId: "bus",
  variant: "default",
  name: "Bus",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BusLogo;
