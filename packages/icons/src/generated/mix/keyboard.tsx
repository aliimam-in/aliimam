/**
 * Auto-generated logo component: Keyboard (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KeyboardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KeyboardLogo = React.forwardRef<SVGSVGElement, KeyboardLogoProps>(
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
      <path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />
    </svg>
  )
);

KeyboardLogo.displayName = "KeyboardLogo";

export const KeyboardLogoMetadata = {
  id: "keyboard",
  baseId: "keyboard",
  variant: "default",
  name: "Keyboard",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KeyboardLogo;
