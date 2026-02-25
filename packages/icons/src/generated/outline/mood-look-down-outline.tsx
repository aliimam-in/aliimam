/**
 * Auto-generated logo component: Mood Look Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodLookDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodLookDownOutlineLogo = React.forwardRef<SVGSVGElement, MoodLookDownOutlineLogoProps>(
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
  <path d="M9 13h.01" />
  <path d="M15 13h.01" />
  <path d="M11 17h2" />
    </svg>
  )
);

MoodLookDownOutlineLogo.displayName = "MoodLookDownOutlineLogo";

export const MoodLookDownOutlineLogoMetadata = {
  id: "mood-look-down-outline",
  baseId: "mood-look-down-outline",
  variant: "default",
  name: "Mood Look Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodLookDownOutlineLogo;
