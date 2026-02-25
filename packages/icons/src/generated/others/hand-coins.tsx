/**
 * Auto-generated logo component: Hand Coins (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HandCoinsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HandCoinsLogo = React.forwardRef<SVGSVGElement, HandCoinsLogoProps>(
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
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
  <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
  <path d="m2 16 6 6" />
  <circle cx="16" cy="9" r="2.9" />
  <circle cx="6" cy="5" r="3" />
    </svg>
  )
);

HandCoinsLogo.displayName = "HandCoinsLogo";

export const HandCoinsLogoMetadata = {
  id: "hand-coins",
  baseId: "hand-coins",
  variant: "default",
  name: "Hand Coins",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HandCoinsLogo;
