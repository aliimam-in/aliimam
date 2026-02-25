/**
 * Auto-generated logo component: Mood Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodPlusOutlineLogo = React.forwardRef<SVGSVGElement, MoodPlusOutlineLogoProps>(
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
      <path d="M20.985 12.528a9 9 0 1 0 -8.45 8.456" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
    </svg>
  )
);

MoodPlusOutlineLogo.displayName = "MoodPlusOutlineLogo";

export const MoodPlusOutlineLogoMetadata = {
  id: "mood-plus-outline",
  baseId: "mood-plus-outline",
  variant: "default",
  name: "Mood Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodPlusOutlineLogo;
