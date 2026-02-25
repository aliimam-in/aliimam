/**
 * Auto-generated logo component: Mood Crazy Happy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodCrazyHappyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodCrazyHappyOutlineLogo = React.forwardRef<SVGSVGElement, MoodCrazyHappyOutlineLogoProps>(
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
  <path d="M7 8.5l3 3" />
  <path d="M7 11.5l3 -3" />
  <path d="M14 8.5l3 3" />
  <path d="M14 11.5l3 -3" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </svg>
  )
);

MoodCrazyHappyOutlineLogo.displayName = "MoodCrazyHappyOutlineLogo";

export const MoodCrazyHappyOutlineLogoMetadata = {
  id: "mood-crazy-happy-outline",
  baseId: "mood-crazy-happy-outline",
  variant: "default",
  name: "Mood Crazy Happy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodCrazyHappyOutlineLogo;
