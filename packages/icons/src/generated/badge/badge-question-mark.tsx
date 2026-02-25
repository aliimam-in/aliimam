/**
 * Auto-generated logo component: Badge Question Mark (default)
 * Category: badge
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeQuestionMarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeQuestionMarkLogo = React.forwardRef<SVGSVGElement, BadgeQuestionMarkLogoProps>(
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
  <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
  )
);

BadgeQuestionMarkLogo.displayName = "BadgeQuestionMarkLogo";

export const BadgeQuestionMarkLogoMetadata = {
  id: "badge-question-mark",
  baseId: "badge-question-mark",
  variant: "default",
  name: "Badge Question Mark",
  category: "badge",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeQuestionMarkLogo;
