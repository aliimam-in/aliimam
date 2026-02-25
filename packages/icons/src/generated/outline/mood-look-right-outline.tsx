/**
 * Auto-generated logo component: Mood Look Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodLookRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodLookRightOutlineLogo = React.forwardRef<SVGSVGElement, MoodLookRightOutlineLogoProps>(
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
  <path d="M15 9h-.01" />
  <path d="M20 15h-4" />
    </svg>
  )
);

MoodLookRightOutlineLogo.displayName = "MoodLookRightOutlineLogo";

export const MoodLookRightOutlineLogoMetadata = {
  id: "mood-look-right-outline",
  baseId: "mood-look-right-outline",
  variant: "default",
  name: "Mood Look Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodLookRightOutlineLogo;
