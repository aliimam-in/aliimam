/**
 * Auto-generated logo component: Mood Look Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodLookUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodLookUpOutlineLogo = React.forwardRef<SVGSVGElement, MoodLookUpOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M9 8h.01" />
  <path d="M15 8h.01" />
  <path d="M11 12h2" />
    </svg>
  )
);

MoodLookUpOutlineLogo.displayName = "MoodLookUpOutlineLogo";

export const MoodLookUpOutlineLogoMetadata = {
  id: "mood-look-up-outline",
  baseId: "mood-look-up-outline",
  variant: "default",
  name: "Mood Look Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodLookUpOutlineLogo;
