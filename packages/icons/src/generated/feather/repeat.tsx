/**
 * Auto-generated logo component: Repeat (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RepeatLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RepeatLogo = React.forwardRef<SVGSVGElement, RepeatLogoProps>(
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
      <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </svg>
  )
);

RepeatLogo.displayName = "RepeatLogo";

export const RepeatLogoMetadata = {
  id: "repeat",
  baseId: "repeat",
  variant: "default",
  name: "Repeat",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RepeatLogo;
