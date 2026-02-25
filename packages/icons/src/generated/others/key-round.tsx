/**
 * Auto-generated logo component: Key Round (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KeyRoundLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KeyRoundLogo = React.forwardRef<SVGSVGElement, KeyRoundLogoProps>(
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
      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
);

KeyRoundLogo.displayName = "KeyRoundLogo";

export const KeyRoundLogoMetadata = {
  id: "key-round",
  baseId: "key-round",
  variant: "default",
  name: "Key Round",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KeyRoundLogo;
