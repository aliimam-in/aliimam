/**
 * Auto-generated logo component: Mood Kid Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodKidOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodKidOutlineLogo = React.forwardRef<SVGSVGElement, MoodKidOutlineLogoProps>(
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
  <path d="M9 10l.01 0" />
  <path d="M15 10l.01 0" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  <path d="M12 3a2 2 0 0 0 0 4" />
    </svg>
  )
);

MoodKidOutlineLogo.displayName = "MoodKidOutlineLogo";

export const MoodKidOutlineLogoMetadata = {
  id: "mood-kid-outline",
  baseId: "mood-kid-outline",
  variant: "default",
  name: "Mood Kid Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodKidOutlineLogo;
