/**
 * Auto-generated logo component: Tool Case (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToolCaseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToolCaseLogo = React.forwardRef<SVGSVGElement, ToolCaseLogoProps>(
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
      <path d="M10 15h4" />
  <path d="m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27" />
  <path d="m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122" />
  <path d="M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    </svg>
  )
);

ToolCaseLogo.displayName = "ToolCaseLogo";

export const ToolCaseLogoMetadata = {
  id: "tool-case",
  baseId: "tool-case",
  variant: "default",
  name: "Tool Case",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToolCaseLogo;
