/**
 * Auto-generated logo component: Stack Back Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackBackOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StackBackOutlineLogo = React.forwardRef<SVGSVGElement, StackBackOutlineLogoProps>(
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
      <path d="M4 8l8 4l8 -4l-8 -4l-8 4" />
  <path d="M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2" fill="currentColor" />
  <path d="M8 10l-4 2l4 2m8 0l4 -2l-4 -2" />
    </svg>
  )
);

StackBackOutlineLogo.displayName = "StackBackOutlineLogo";

export const StackBackOutlineLogoMetadata = {
  id: "stack-back-outline",
  baseId: "stack-back-outline",
  variant: "default",
  name: "Stack Back Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StackBackOutlineLogo;
