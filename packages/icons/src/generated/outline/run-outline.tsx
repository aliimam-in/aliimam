/**
 * Auto-generated logo component: Run Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RunOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RunOutlineLogo = React.forwardRef<SVGSVGElement, RunOutlineLogoProps>(
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
      <path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M4 17l5 1l.75 -1.5" />
  <path d="M15 21l0 -4l-4 -3l1 -6" />
  <path d="M7 12l0 -3l5 -1l3 3l3 1" />
    </svg>
  )
);

RunOutlineLogo.displayName = "RunOutlineLogo";

export const RunOutlineLogoMetadata = {
  id: "run-outline",
  baseId: "run-outline",
  variant: "default",
  name: "Run Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RunOutlineLogo;
