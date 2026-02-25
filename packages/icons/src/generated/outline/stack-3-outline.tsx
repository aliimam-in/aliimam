/**
 * Auto-generated logo component: Stack 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Stack3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Stack3OutlineLogo = React.forwardRef<SVGSVGElement, Stack3OutlineLogoProps>(
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
      <path d="M12 2l-8 4l8 4l8 -4l-8 -4" />
  <path d="M4 10l8 4l8 -4" />
  <path d="M4 18l8 4l8 -4" />
  <path d="M4 14l8 4l8 -4" />
    </svg>
  )
);

Stack3OutlineLogo.displayName = "Stack3OutlineLogo";

export const Stack3OutlineLogoMetadata = {
  id: "stack-3-outline",
  baseId: "stack-3-outline",
  variant: "default",
  name: "Stack 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Stack3OutlineLogo;
