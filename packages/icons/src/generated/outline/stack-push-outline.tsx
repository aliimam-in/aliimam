/**
 * Auto-generated logo component: Stack Push Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackPushOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StackPushOutlineLogo = React.forwardRef<SVGSVGElement, StackPushOutlineLogoProps>(
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
      <path d="M6 10l-2 1l8 4l8 -4l-2 -1" />
  <path d="M4 15l8 4l8 -4" />
  <path d="M12 4v7" />
  <path d="M15 8l-3 3l-3 -3" />
    </svg>
  )
);

StackPushOutlineLogo.displayName = "StackPushOutlineLogo";

export const StackPushOutlineLogoMetadata = {
  id: "stack-push-outline",
  baseId: "stack-push-outline",
  variant: "default",
  name: "Stack Push Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StackPushOutlineLogo;
