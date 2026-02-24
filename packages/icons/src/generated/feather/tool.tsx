/**
 * Auto-generated logo component: Tool (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToolLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToolLogo = React.forwardRef<SVGSVGElement, ToolLogoProps>(
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  )
);

ToolLogo.displayName = "ToolLogo";

export const ToolLogoMetadata = {
  id: "tool",
  baseId: "tool",
  variant: "default",
  name: "Tool",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToolLogo;
