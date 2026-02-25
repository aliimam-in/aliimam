/**
 * Auto-generated logo component: Calendar Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CalendarQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CalendarQuestionOutlineLogo = React.forwardRef<SVGSVGElement, CalendarQuestionOutlineLogoProps>(
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
      <path d="M15 21h-9a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

CalendarQuestionOutlineLogo.displayName = "CalendarQuestionOutlineLogo";

export const CalendarQuestionOutlineLogoMetadata = {
  id: "calendar-question-outline",
  baseId: "calendar-question-outline",
  variant: "default",
  name: "Calendar Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CalendarQuestionOutlineLogo;
