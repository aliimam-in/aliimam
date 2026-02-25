/**
 * Auto-generated logo component: Mood Sad Dizzy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodSadDizzyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodSadDizzyOutlineLogo = React.forwardRef<SVGSVGElement, MoodSadDizzyOutlineLogoProps>(
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
  <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
  <path d="M8 9l2 2" />
  <path d="M10 9l-2 2" />
  <path d="M14 9l2 2" />
  <path d="M16 9l-2 2" />
    </svg>
  )
);

MoodSadDizzyOutlineLogo.displayName = "MoodSadDizzyOutlineLogo";

export const MoodSadDizzyOutlineLogoMetadata = {
  id: "mood-sad-dizzy-outline",
  baseId: "mood-sad-dizzy-outline",
  variant: "default",
  name: "Mood Sad Dizzy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodSadDizzyOutlineLogo;
