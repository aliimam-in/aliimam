/**
 * Auto-generated logo component: Wand (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WandLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WandLogo = React.forwardRef<SVGSVGElement, WandLogoProps>(
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
      <path d="M15 4V2" />
  <path d="M15 16v-2" />
  <path d="M8 9h2" />
  <path d="M20 9h2" />
  <path d="M17.8 11.8 19 13" />
  <path d="M15 9h.01" />
  <path d="M17.8 6.2 19 5" />
  <path d="m3 21 9-9" />
  <path d="M12.2 6.2 11 5" />
    </svg>
  )
);

WandLogo.displayName = "WandLogo";

export const WandLogoMetadata = {
  id: "wand",
  baseId: "wand",
  variant: "default",
  name: "Wand",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WandLogo;
