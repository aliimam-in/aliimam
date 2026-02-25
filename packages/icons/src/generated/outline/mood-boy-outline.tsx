/**
 * Auto-generated logo component: Mood Boy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodBoyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodBoyOutlineLogo = React.forwardRef<SVGSVGElement, MoodBoyOutlineLogoProps>(
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
      <path d="M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81" />
  <path d="M9.5 16a3.5 3.5 0 0 0 5 0" />
  <path d="M8.5 2c1.5 1 2.5 3.5 2.5 5" />
  <path d="M12.5 2c1.5 2 2 3.5 2 5" />
  <path d="M9 12l.01 0" />
  <path d="M15 12l.01 0" />
    </svg>
  )
);

MoodBoyOutlineLogo.displayName = "MoodBoyOutlineLogo";

export const MoodBoyOutlineLogoMetadata = {
  id: "mood-boy-outline",
  baseId: "mood-boy-outline",
  variant: "default",
  name: "Mood Boy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodBoyOutlineLogo;
