/**
 * Auto-generated logo component: Stack Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StackOutlineLogo = React.forwardRef<SVGSVGElement, StackOutlineLogoProps>(
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
      <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
  <path d="M4 14l8 4l8 -4" />
    </svg>
  )
);

StackOutlineLogo.displayName = "StackOutlineLogo";

export const StackOutlineLogoMetadata = {
  id: "stack-outline",
  baseId: "stack-outline",
  variant: "default",
  name: "Stack Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StackOutlineLogo;
