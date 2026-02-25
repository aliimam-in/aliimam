/**
 * Auto-generated logo component: Key (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KeyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KeyLogo = React.forwardRef<SVGSVGElement, KeyLogoProps>(
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
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
  <path d="m21 2-9.6 9.6" />
  <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  )
);

KeyLogo.displayName = "KeyLogo";

export const KeyLogoMetadata = {
  id: "key",
  baseId: "key",
  variant: "default",
  name: "Key",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KeyLogo;
