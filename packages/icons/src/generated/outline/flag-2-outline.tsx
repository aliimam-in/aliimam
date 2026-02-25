/**
 * Auto-generated logo component: Flag 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Flag2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Flag2OutlineLogo = React.forwardRef<SVGSVGElement, Flag2OutlineLogoProps>(
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
      <path d="M5 14h14v-9h-14v16" />
    </svg>
  )
);

Flag2OutlineLogo.displayName = "Flag2OutlineLogo";

export const Flag2OutlineLogoMetadata = {
  id: "flag-2-outline",
  baseId: "flag-2-outline",
  variant: "default",
  name: "Flag 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flag2OutlineLogo;
