/**
 * Auto-generated logo component: Mood Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodHeartOutlineLogo = React.forwardRef<SVGSVGElement, MoodHeartOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -8.012 8.946" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M9.5 15a3.59 3.59 0 0 0 2.774 .99" />
  <path d="M18.994 21.5l2.518 -2.58a1.74 1.74 0 0 0 .004 -2.413a1.627 1.627 0 0 0 -2.346 -.005l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 -.004a1.74 1.74 0 0 0 -.004 2.412l2.51 2.59" />
    </svg>
  )
);

MoodHeartOutlineLogo.displayName = "MoodHeartOutlineLogo";

export const MoodHeartOutlineLogoMetadata = {
  id: "mood-heart-outline",
  baseId: "mood-heart-outline",
  variant: "default",
  name: "Mood Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodHeartOutlineLogo;
