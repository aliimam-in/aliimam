/**
 * Auto-generated logo component: Triangle Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleRightLogo = React.forwardRef<SVGSVGElement, TriangleRightLogoProps>(
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
      <path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" />
    </svg>
  )
);

TriangleRightLogo.displayName = "TriangleRightLogo";

export const TriangleRightLogoMetadata = {
  id: "triangle-right",
  baseId: "triangle-right",
  variant: "default",
  name: "Triangle Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleRightLogo;
