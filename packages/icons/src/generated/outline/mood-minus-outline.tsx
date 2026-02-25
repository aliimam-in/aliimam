/**
 * Auto-generated logo component: Mood Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodMinusOutlineLogo = React.forwardRef<SVGSVGElement, MoodMinusOutlineLogoProps>(
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
      <path d="M20.48 15.014a9 9 0 1 0 -7.956 5.97" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M16 19h6" />
  <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
    </svg>
  )
);

MoodMinusOutlineLogo.displayName = "MoodMinusOutlineLogo";

export const MoodMinusOutlineLogoMetadata = {
  id: "mood-minus-outline",
  baseId: "mood-minus-outline",
  variant: "default",
  name: "Mood Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodMinusOutlineLogo;
