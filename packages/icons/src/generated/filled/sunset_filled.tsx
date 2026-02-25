/**
 * Auto-generated logo component: Sunset (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunsetFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunsetFilledLogo = React.forwardRef<SVGSVGElement, SunsetFilledLogoProps>(
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
      <path d="M4 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z" />
  <path d="M21 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z" />
  <path d="M6.307 9.893l.7 .7a1 1 0 0 1 -1.414 1.414l-.7 -.7a1 1 0 0 1 1.414 -1.414" />
  <path d="M19.107 9.893a1 1 0 0 1 0 1.414l-.7 .7a1 1 0 0 1 -1.414 -1.414l.7 -.7a1 1 0 0 1 1.414 0" />
  <path d="M12 2a1 1 0 0 1 1 1v3.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a.98 .98 0 0 1 -.767 .293l-.124 -.017l-.127 -.032l-.104 -.04l-.115 -.063a1 1 0 0 1 -.151 -.114l-3.026 -3.027a1 1 0 0 1 1.414 -1.414l1.293 1.292v-3.585a1 1 0 0 1 1 -1" />
  <path d="M3 20h18a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2" />
  <path d="M12 12a5 5 0 0 1 4.583 7.002h-9.166a5 5 0 0 1 4.583 -7.002" />
    </svg>
  )
);

SunsetFilledLogo.displayName = "SunsetFilledLogo";

export const SunsetFilledLogoMetadata = {
  id: "sunset_filled",
  baseId: "sunset",
  variant: "filled",
  name: "Sunset",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunsetFilledLogo;
