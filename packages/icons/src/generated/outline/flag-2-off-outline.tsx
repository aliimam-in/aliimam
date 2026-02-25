/**
 * Auto-generated logo component: Flag 2 Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Flag2OffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Flag2OffOutlineLogo = React.forwardRef<SVGSVGElement, Flag2OffOutlineLogoProps>(
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
      <path d="M5 14h9m4 0h1v-9h-10m-4 0v16" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

Flag2OffOutlineLogo.displayName = "Flag2OffOutlineLogo";

export const Flag2OffOutlineLogoMetadata = {
  id: "flag-2-off-outline",
  baseId: "flag-2-off-outline",
  variant: "default",
  name: "Flag 2 Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flag2OffOutlineLogo;
