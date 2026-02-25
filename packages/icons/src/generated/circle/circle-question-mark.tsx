/**
 * Auto-generated logo component: Circle Question Mark (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleQuestionMarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleQuestionMarkLogo = React.forwardRef<SVGSVGElement, CircleQuestionMarkLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
  <path d="M12 17h.01" />
    </svg>
  )
);

CircleQuestionMarkLogo.displayName = "CircleQuestionMarkLogo";

export const CircleQuestionMarkLogoMetadata = {
  id: "circle-question-mark",
  baseId: "circle-question-mark",
  variant: "default",
  name: "Circle Question Mark",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleQuestionMarkLogo;
