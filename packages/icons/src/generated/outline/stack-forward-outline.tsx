/**
 * Auto-generated logo component: Stack Forward Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackForwardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StackForwardOutlineLogo = React.forwardRef<SVGSVGElement, StackForwardOutlineLogoProps>(
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
      <path d="M12 5l-8 4l8 4l8 -4l-8 -4" fill="currentColor" />
  <path d="M10 12l-6 3l8 4l8 -4l-6 -3" />
    </svg>
  )
);

StackForwardOutlineLogo.displayName = "StackForwardOutlineLogo";

export const StackForwardOutlineLogoMetadata = {
  id: "stack-forward-outline",
  baseId: "stack-forward-outline",
  variant: "default",
  name: "Stack Forward Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StackForwardOutlineLogo;
