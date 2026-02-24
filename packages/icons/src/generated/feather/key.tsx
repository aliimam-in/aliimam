/**
 * Auto-generated logo component: Key (default)
 * Category: feather
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
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
    </svg>
  )
);

KeyLogo.displayName = "KeyLogo";

export const KeyLogoMetadata = {
  id: "key",
  baseId: "key",
  variant: "default",
  name: "Key",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KeyLogo;
