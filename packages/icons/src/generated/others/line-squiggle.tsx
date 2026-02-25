/**
 * Auto-generated logo component: Line Squiggle (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LineSquiggleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LineSquiggleLogo = React.forwardRef<SVGSVGElement, LineSquiggleLogoProps>(
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
      <path d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2" />
    </svg>
  )
);

LineSquiggleLogo.displayName = "LineSquiggleLogo";

export const LineSquiggleLogoMetadata = {
  id: "line-squiggle",
  baseId: "line-squiggle",
  variant: "default",
  name: "Line Squiggle",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LineSquiggleLogo;
