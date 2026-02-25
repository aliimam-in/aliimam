/**
 * Auto-generated logo component: Tools Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToolsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToolsOffOutlineLogo = React.forwardRef<SVGSVGElement, ToolsOffOutlineLogoProps>(
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
      <path d="M16 12l4 -4a2.828 2.828 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7" />
  <path d="M14.5 5.5l4 4" />
  <path d="M12 8l-5 -5m-2 2l-2 2l5 5" />
  <path d="M7 8l-1.5 1.5" />
  <path d="M16 12l5 5m-2 2l-2 2l-5 -5" />
  <path d="M16 17l-1.5 1.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ToolsOffOutlineLogo.displayName = "ToolsOffOutlineLogo";

export const ToolsOffOutlineLogoMetadata = {
  id: "tools-off-outline",
  baseId: "tools-off-outline",
  variant: "default",
  name: "Tools Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToolsOffOutlineLogo;
