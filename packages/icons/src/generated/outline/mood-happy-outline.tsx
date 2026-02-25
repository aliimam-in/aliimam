/**
 * Auto-generated logo component: Mood Happy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodHappyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodHappyOutlineLogo = React.forwardRef<SVGSVGElement, MoodHappyOutlineLogoProps>(
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
  <path d="M8 13a4 4 0 1 0 8 0h-8" />
    </svg>
  )
);

MoodHappyOutlineLogo.displayName = "MoodHappyOutlineLogo";

export const MoodHappyOutlineLogoMetadata = {
  id: "mood-happy-outline",
  baseId: "mood-happy-outline",
  variant: "default",
  name: "Mood Happy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodHappyOutlineLogo;
