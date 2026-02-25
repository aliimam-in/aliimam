/**
 * Auto-generated logo component: Clock Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockQuestionOutlineLogo = React.forwardRef<SVGSVGElement, ClockQuestionOutlineLogoProps>(
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
      <path d="M20.975 11.33a9 9 0 1 0 -5.717 9.06" />
  <path d="M12 7v5l2 2" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

ClockQuestionOutlineLogo.displayName = "ClockQuestionOutlineLogo";

export const ClockQuestionOutlineLogoMetadata = {
  id: "clock-question-outline",
  baseId: "clock-question-outline",
  variant: "default",
  name: "Clock Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockQuestionOutlineLogo;
