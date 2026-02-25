/**
 * Auto-generated logo component: Mood Tongue Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodTongueOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodTongueOutlineLogo = React.forwardRef<SVGSVGElement, MoodTongueOutlineLogoProps>(
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
  <path d="M9 10l.01 0" />
  <path d="M15 10l.01 0" />
  <path d="M10 14v2a2 2 0 0 0 4 0v-2m1.5 0h-7" />
    </svg>
  )
);

MoodTongueOutlineLogo.displayName = "MoodTongueOutlineLogo";

export const MoodTongueOutlineLogoMetadata = {
  id: "mood-tongue-outline",
  baseId: "mood-tongue-outline",
  variant: "default",
  name: "Mood Tongue Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodTongueOutlineLogo;
