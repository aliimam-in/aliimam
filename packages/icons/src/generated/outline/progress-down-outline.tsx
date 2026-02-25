/**
 * Auto-generated logo component: Progress Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ProgressDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ProgressDownOutlineLogo = React.forwardRef<SVGSVGElement, ProgressDownOutlineLogoProps>(
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
      <path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />
  <path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
  <path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />
  <path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />
  <path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
  <path d="M12 9v6" />
  <path d="M15 12l-3 3l-3 -3" />
    </svg>
  )
);

ProgressDownOutlineLogo.displayName = "ProgressDownOutlineLogo";

export const ProgressDownOutlineLogoMetadata = {
  id: "progress-down-outline",
  baseId: "progress-down-outline",
  variant: "default",
  name: "Progress Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ProgressDownOutlineLogo;
