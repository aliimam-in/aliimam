/**
 * Auto-generated logo component: Mood Angry Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodAngryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodAngryOutlineLogo = React.forwardRef<SVGSVGElement, MoodAngryOutlineLogoProps>(
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
      <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" />
  <path d="M8 9l2 1" />
  <path d="M16 9l-2 1" />
  <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
    </svg>
  )
);

MoodAngryOutlineLogo.displayName = "MoodAngryOutlineLogo";

export const MoodAngryOutlineLogoMetadata = {
  id: "mood-angry-outline",
  baseId: "mood-angry-outline",
  variant: "default",
  name: "Mood Angry Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodAngryOutlineLogo;
