/**
 * Auto-generated logo component: Flag Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagBoltOutlineLogo = React.forwardRef<SVGSVGElement, FlagBoltOutlineLogoProps>(
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
      <path d="M14.673 15.36a4.978 4.978 0 0 1 -2.673 -1.36a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" />
  <path d="M5 21v-7" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

FlagBoltOutlineLogo.displayName = "FlagBoltOutlineLogo";

export const FlagBoltOutlineLogoMetadata = {
  id: "flag-bolt-outline",
  baseId: "flag-bolt-outline",
  variant: "default",
  name: "Flag Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagBoltOutlineLogo;
