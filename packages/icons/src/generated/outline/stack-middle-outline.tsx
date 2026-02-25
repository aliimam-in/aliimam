/**
 * Auto-generated logo component: Stack Middle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackMiddleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StackMiddleOutlineLogo = React.forwardRef<SVGSVGElement, StackMiddleOutlineLogoProps>(
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
      <path d="M16 10l4 -2l-8 -4l-8 4l4 2" />
  <path d="M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2" fill="currentColor" />
  <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
    </svg>
  )
);

StackMiddleOutlineLogo.displayName = "StackMiddleOutlineLogo";

export const StackMiddleOutlineLogoMetadata = {
  id: "stack-middle-outline",
  baseId: "stack-middle-outline",
  variant: "default",
  name: "Stack Middle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StackMiddleOutlineLogo;
