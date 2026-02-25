/**
 * Auto-generated logo component: Mood Sick Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodSickOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodSickOutlineLogo = React.forwardRef<SVGSVGElement, MoodSickOutlineLogoProps>(
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
  <path d="M9 10h-.01" />
  <path d="M15 10h-.01" />
  <path d="M8 16l1 -1l1.5 1l1.5 -1l1.5 1l1.5 -1l1 1" />
    </svg>
  )
);

MoodSickOutlineLogo.displayName = "MoodSickOutlineLogo";

export const MoodSickOutlineLogoMetadata = {
  id: "mood-sick-outline",
  baseId: "mood-sick-outline",
  variant: "default",
  name: "Mood Sick Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodSickOutlineLogo;
