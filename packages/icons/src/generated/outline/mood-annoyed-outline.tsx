/**
 * Auto-generated logo component: Mood Annoyed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodAnnoyedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodAnnoyedOutlineLogo = React.forwardRef<SVGSVGElement, MoodAnnoyedOutlineLogoProps>(
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
  <path d="M15 14c-2 0 -3 1 -3.5 2.05" />
  <path d="M9 10h-.01" />
  <path d="M15 10h-.01" />
    </svg>
  )
);

MoodAnnoyedOutlineLogo.displayName = "MoodAnnoyedOutlineLogo";

export const MoodAnnoyedOutlineLogoMetadata = {
  id: "mood-annoyed-outline",
  baseId: "mood-annoyed-outline",
  variant: "default",
  name: "Mood Annoyed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodAnnoyedOutlineLogo;
