/**
 * Auto-generated logo component: Circle Caret Left (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleCaretLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleCaretLeftFilledLogo = React.forwardRef<SVGSVGElement, CircleCaretLeftFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10a10 10 0 1 1 0 -20m2 13v-6a1 1 0 0 0 -1.707 -.708l-3 3a1 1 0 0 0 0 1.415l3 3a1 1 0 0 0 1.414 0l.083 -.094c.14 -.18 .21 -.396 .21 -.613" />
    </svg>
  )
);

CircleCaretLeftFilledLogo.displayName = "CircleCaretLeftFilledLogo";

export const CircleCaretLeftFilledLogoMetadata = {
  id: "circle-caret-left_filled",
  baseId: "circle-caret-left",
  variant: "filled",
  name: "Circle Caret Left",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleCaretLeftFilledLogo;
