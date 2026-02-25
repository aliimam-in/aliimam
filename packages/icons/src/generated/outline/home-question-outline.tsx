/**
 * Auto-generated logo component: Home Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeQuestionOutlineLogo = React.forwardRef<SVGSVGElement, HomeQuestionOutlineLogoProps>(
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
      <path d="M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h7" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.467 0 .896 .16 1.236 .428" />
  <path d="M19 22v.01" />
  <path d="M19 19a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

HomeQuestionOutlineLogo.displayName = "HomeQuestionOutlineLogo";

export const HomeQuestionOutlineLogoMetadata = {
  id: "home-question-outline",
  baseId: "home-question-outline",
  variant: "default",
  name: "Home Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeQuestionOutlineLogo;
