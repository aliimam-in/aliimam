/**
 * Auto-generated logo component: Stack Backward Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackBackwardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StackBackwardOutlineLogo = React.forwardRef<SVGSVGElement, StackBackwardOutlineLogoProps>(
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
      <path d="M14 12l6 -3l-8 -4l-8 4l6 3" />
  <path d="M10 12l-6 3l8 4l8 -4l-6 -3l-2 1l-2 -1" fill="currentColor" />
    </svg>
  )
);

StackBackwardOutlineLogo.displayName = "StackBackwardOutlineLogo";

export const StackBackwardOutlineLogoMetadata = {
  id: "stack-backward-outline",
  baseId: "stack-backward-outline",
  variant: "default",
  name: "Stack Backward Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StackBackwardOutlineLogo;
