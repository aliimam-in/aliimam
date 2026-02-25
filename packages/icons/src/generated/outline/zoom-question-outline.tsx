/**
 * Auto-generated logo component: Zoom Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomQuestionOutlineLogo = React.forwardRef<SVGSVGElement, ZoomQuestionOutlineLogoProps>(
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
      <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
  <path d="M10 13l0 .01" />
  <path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" />
    </svg>
  )
);

ZoomQuestionOutlineLogo.displayName = "ZoomQuestionOutlineLogo";

export const ZoomQuestionOutlineLogoMetadata = {
  id: "zoom-question-outline",
  baseId: "zoom-question-outline",
  variant: "default",
  name: "Zoom Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomQuestionOutlineLogo;
