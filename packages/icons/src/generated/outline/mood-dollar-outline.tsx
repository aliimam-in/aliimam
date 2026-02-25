/**
 * Auto-generated logo component: Mood Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodDollarOutlineLogo = React.forwardRef<SVGSVGElement, MoodDollarOutlineLogoProps>(
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
      <path d="M20.87 10.48a9 9 0 1 0 -7.876 10.465" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M9.5 15c.658 .64 1.56 1 2.5 1c.357 0 .709 -.052 1.043 -.151" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

MoodDollarOutlineLogo.displayName = "MoodDollarOutlineLogo";

export const MoodDollarOutlineLogoMetadata = {
  id: "mood-dollar-outline",
  baseId: "mood-dollar-outline",
  variant: "default",
  name: "Mood Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodDollarOutlineLogo;
