/**
 * Auto-generated logo component: Tools Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToolsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToolsOutlineLogo = React.forwardRef<SVGSVGElement, ToolsOutlineLogoProps>(
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
      <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
  <path d="M14.5 5.5l4 4" />
  <path d="M12 8l-5 -5l-4 4l5 5" />
  <path d="M7 8l-1.5 1.5" />
  <path d="M16 12l5 5l-4 4l-5 -5" />
  <path d="M16 17l-1.5 1.5" />
    </svg>
  )
);

ToolsOutlineLogo.displayName = "ToolsOutlineLogo";

export const ToolsOutlineLogoMetadata = {
  id: "tools-outline",
  baseId: "tools-outline",
  variant: "default",
  name: "Tools Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToolsOutlineLogo;
