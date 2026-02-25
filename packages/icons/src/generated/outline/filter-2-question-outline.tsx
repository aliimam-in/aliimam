/**
 * Auto-generated logo component: Filter 2 Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2QuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2QuestionOutlineLogo = React.forwardRef<SVGSVGElement, Filter2QuestionOutlineLogoProps>(
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
      <path d="M4 6h16" />
  <path d="M6 12h10.5" />
  <path d="M9 18h5" />
  <path d="M19 22v.01" />
  <path d="M19 19c.448 -.001 .883 -.153 1.235 -.431c.352 -.278 .6 -.666 .706 -1.101c.105 -.436 .061 -.894 -.125 -1.302c-.186 -.408 -.504 -.742 -.902 -.948c-.398 -.204 -.853 -.267 -1.291 -.179c-.438 .088 -.834 .321 -1.123 .662" />
    </svg>
  )
);

Filter2QuestionOutlineLogo.displayName = "Filter2QuestionOutlineLogo";

export const Filter2QuestionOutlineLogoMetadata = {
  id: "filter-2-question-outline",
  baseId: "filter-2-question-outline",
  variant: "default",
  name: "Filter 2 Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2QuestionOutlineLogo;
