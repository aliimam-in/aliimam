/**
 * Auto-generated logo component: Mood Sad Squint Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodSadSquintOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodSadSquintOutlineLogo = React.forwardRef<SVGSVGElement, MoodSadSquintOutlineLogoProps>(
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
  <path d="M8.5 11.5l1.5 -1.5l-1.5 -1.5" />
  <path d="M15.5 11.5l-1.5 -1.5l1.5 -1.5" />
    </svg>
  )
);

MoodSadSquintOutlineLogo.displayName = "MoodSadSquintOutlineLogo";

export const MoodSadSquintOutlineLogoMetadata = {
  id: "mood-sad-squint-outline",
  baseId: "mood-sad-squint-outline",
  variant: "default",
  name: "Mood Sad Squint Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodSadSquintOutlineLogo;
