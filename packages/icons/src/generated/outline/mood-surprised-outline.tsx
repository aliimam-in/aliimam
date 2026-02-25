/**
 * Auto-generated logo component: Mood Surprised Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodSurprisedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodSurprisedOutlineLogo = React.forwardRef<SVGSVGElement, MoodSurprisedOutlineLogoProps>(
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
  <path d="M9 9l.01 0" />
  <path d="M15 9l.01 0" />
  <path d="M10 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

MoodSurprisedOutlineLogo.displayName = "MoodSurprisedOutlineLogo";

export const MoodSurprisedOutlineLogoMetadata = {
  id: "mood-surprised-outline",
  baseId: "mood-surprised-outline",
  variant: "default",
  name: "Mood Surprised Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodSurprisedOutlineLogo;
