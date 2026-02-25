/**
 * Auto-generated logo component: Stack Front Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackFrontOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StackFrontOutlineLogo = React.forwardRef<SVGSVGElement, StackFrontOutlineLogoProps>(
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
      <path d="M12 4l-8 4l8 4l8 -4l-8 -4" fill="currentColor" />
  <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
  <path d="M8 10l-4 2l8 4l8 -4l-4 -2" />
    </svg>
  )
);

StackFrontOutlineLogo.displayName = "StackFrontOutlineLogo";

export const StackFrontOutlineLogoMetadata = {
  id: "stack-front-outline",
  baseId: "stack-front-outline",
  variant: "default",
  name: "Stack Front Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StackFrontOutlineLogo;
