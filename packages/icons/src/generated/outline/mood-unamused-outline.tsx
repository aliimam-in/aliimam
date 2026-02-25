/**
 * Auto-generated logo component: Mood Unamused Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodUnamusedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodUnamusedOutlineLogo = React.forwardRef<SVGSVGElement, MoodUnamusedOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M11 16l4 -1.5" />
  <path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
  <path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
    </svg>
  )
);

MoodUnamusedOutlineLogo.displayName = "MoodUnamusedOutlineLogo";

export const MoodUnamusedOutlineLogoMetadata = {
  id: "mood-unamused-outline",
  baseId: "mood-unamused-outline",
  variant: "default",
  name: "Mood Unamused Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodUnamusedOutlineLogo;
