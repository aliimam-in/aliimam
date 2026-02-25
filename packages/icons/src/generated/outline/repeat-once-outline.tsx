/**
 * Auto-generated logo component: Repeat Once Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RepeatOnceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RepeatOnceOutlineLogo = React.forwardRef<SVGSVGElement, RepeatOnceOutlineLogoProps>(
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
      <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
  <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
  <path d="M11 11l1 -1v4" />
    </svg>
  )
);

RepeatOnceOutlineLogo.displayName = "RepeatOnceOutlineLogo";

export const RepeatOnceOutlineLogoMetadata = {
  id: "repeat-once-outline",
  baseId: "repeat-once-outline",
  variant: "default",
  name: "Repeat Once Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RepeatOnceOutlineLogo;
