/**
 * Auto-generated logo component: Mood Neutral Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodNeutralFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodNeutralFilledLogo = React.forwardRef<SVGSVGElement, MoodNeutralFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-7.99 5.66l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
  )
);

MoodNeutralFilledLogo.displayName = "MoodNeutralFilledLogo";

export const MoodNeutralFilledLogoMetadata = {
  id: "mood-neutral-filled",
  baseId: "mood-neutral-filled",
  variant: "default",
  name: "Mood Neutral Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodNeutralFilledLogo;
