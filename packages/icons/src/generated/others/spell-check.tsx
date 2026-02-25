/**
 * Auto-generated logo component: Spell Check (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpellCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpellCheckLogo = React.forwardRef<SVGSVGElement, SpellCheckLogoProps>(
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
      <path d="m6 16 6-12 6 12" />
  <path d="M8 12h8" />
  <path d="m16 20 2 2 4-4" />
    </svg>
  )
);

SpellCheckLogo.displayName = "SpellCheckLogo";

export const SpellCheckLogoMetadata = {
  id: "spell-check",
  baseId: "spell-check",
  variant: "default",
  name: "Spell Check",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpellCheckLogo;
