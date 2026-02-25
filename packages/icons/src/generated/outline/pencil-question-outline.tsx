/**
 * Auto-generated logo component: Pencil Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PencilQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PencilQuestionOutlineLogo = React.forwardRef<SVGSVGElement, PencilQuestionOutlineLogoProps>(
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
      <path d="M8 20l6 -6l3 -3l1.5 -1.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4" />
  <path d="M13.5 6.5l4 4" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

PencilQuestionOutlineLogo.displayName = "PencilQuestionOutlineLogo";

export const PencilQuestionOutlineLogoMetadata = {
  id: "pencil-question-outline",
  baseId: "pencil-question-outline",
  variant: "default",
  name: "Pencil Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PencilQuestionOutlineLogo;
