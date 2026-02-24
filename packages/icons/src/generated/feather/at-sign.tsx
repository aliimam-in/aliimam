/**
 * Auto-generated logo component: At Sign (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AtSignLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AtSignLogo = React.forwardRef<SVGSVGElement, AtSignLogoProps>(
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
      <circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
    </svg>
  )
);

AtSignLogo.displayName = "AtSignLogo";

export const AtSignLogoMetadata = {
  id: "at-sign",
  baseId: "at-sign",
  variant: "default",
  name: "At Sign",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AtSignLogo;
