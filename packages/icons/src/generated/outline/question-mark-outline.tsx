/**
 * Auto-generated logo component: Question Mark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface QuestionMarkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const QuestionMarkOutlineLogo = React.forwardRef<SVGSVGElement, QuestionMarkOutlineLogoProps>(
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
      <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
  <path d="M12 19l0 .01" />
    </svg>
  )
);

QuestionMarkOutlineLogo.displayName = "QuestionMarkOutlineLogo";

export const QuestionMarkOutlineLogoMetadata = {
  id: "question-mark-outline",
  baseId: "question-mark-outline",
  variant: "default",
  name: "Question Mark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default QuestionMarkOutlineLogo;
