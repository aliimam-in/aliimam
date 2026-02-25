/**
 * Auto-generated logo component: Mood Smile Beam Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodSmileBeamOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodSmileBeamOutlineLogo = React.forwardRef<SVGSVGElement, MoodSmileBeamOutlineLogoProps>(
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
  <path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
  <path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
  <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
    </svg>
  )
);

MoodSmileBeamOutlineLogo.displayName = "MoodSmileBeamOutlineLogo";

export const MoodSmileBeamOutlineLogoMetadata = {
  id: "mood-smile-beam-outline",
  baseId: "mood-smile-beam-outline",
  variant: "default",
  name: "Mood Smile Beam Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodSmileBeamOutlineLogo;
