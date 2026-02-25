/**
 * Auto-generated logo component: Hand Heart (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HandHeartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HandHeartLogo = React.forwardRef<SVGSVGElement, HandHeartLogoProps>(
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
      <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
  <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
  <path d="m2 15 6 6" />
  <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
    </svg>
  )
);

HandHeartLogo.displayName = "HandHeartLogo";

export const HandHeartLogoMetadata = {
  id: "hand-heart",
  baseId: "hand-heart",
  variant: "default",
  name: "Hand Heart",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HandHeartLogo;
