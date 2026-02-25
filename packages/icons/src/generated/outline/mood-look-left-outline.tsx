/**
 * Auto-generated logo component: Mood Look Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodLookLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodLookLeftOutlineLogo = React.forwardRef<SVGSVGElement, MoodLookLeftOutlineLogoProps>(
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
  <path d="M9 9h.01" />
  <path d="M4 15h4" />
    </svg>
  )
);

MoodLookLeftOutlineLogo.displayName = "MoodLookLeftOutlineLogo";

export const MoodLookLeftOutlineLogoMetadata = {
  id: "mood-look-left-outline",
  baseId: "mood-look-left-outline",
  variant: "default",
  name: "Mood Look Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodLookLeftOutlineLogo;
