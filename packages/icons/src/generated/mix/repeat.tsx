/**
 * Auto-generated logo component: Repeat (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixRepeatLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixRepeatLogo = React.forwardRef<SVGSVGElement, MixRepeatLogoProps>(
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
      <path d="m17 2 4 4-4 4" />
  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
  <path d="m7 22-4-4 4-4" />
  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
);

MixRepeatLogo.displayName = "MixRepeatLogo";

export const MixRepeatLogoMetadata = {
  id: "repeat",
  baseId: "repeat",
  variant: "default",
  name: "Repeat",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixRepeatLogo;
