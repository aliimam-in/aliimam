/**
 * Auto-generated logo component: Mood Puzzled Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodPuzzledOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodPuzzledOutlineLogo = React.forwardRef<SVGSVGElement, MoodPuzzledOutlineLogoProps>(
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
      <path d="M14.986 3.51a9 9 0 1 0 1.514 16.284c2.489 -1.437 4.181 -3.978 4.5 -6.794" />
  <path d="M10 10h.01" />
  <path d="M14 8h.01" />
  <path d="M12 15c1 -1.333 2 -2 3 -2" />
  <path d="M20 9v.01" />
  <path d="M20 6a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

MoodPuzzledOutlineLogo.displayName = "MoodPuzzledOutlineLogo";

export const MoodPuzzledOutlineLogoMetadata = {
  id: "mood-puzzled-outline",
  baseId: "mood-puzzled-outline",
  variant: "default",
  name: "Mood Puzzled Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodPuzzledOutlineLogo;
