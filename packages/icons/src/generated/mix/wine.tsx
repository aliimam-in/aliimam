/**
 * Auto-generated logo component: Wine (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WineLogo = React.forwardRef<SVGSVGElement, WineLogoProps>(
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
      <path d="M8 22h8" />
  <path d="M7 10h10" />
  <path d="M12 15v7" />
  <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
    </svg>
  )
);

WineLogo.displayName = "WineLogo";

export const WineLogoMetadata = {
  id: "wine",
  baseId: "wine",
  variant: "default",
  name: "Wine",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WineLogo;
