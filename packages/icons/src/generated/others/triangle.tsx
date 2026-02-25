/**
 * Auto-generated logo component: Triangle (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleLogo = React.forwardRef<SVGSVGElement, TriangleLogoProps>(
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
      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </svg>
  )
);

TriangleLogo.displayName = "TriangleLogo";

export const TriangleLogoMetadata = {
  id: "triangle",
  baseId: "triangle",
  variant: "default",
  name: "Triangle",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleLogo;
