/**
 * Auto-generated logo component: Scribble Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScribbleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScribbleOffOutlineLogo = React.forwardRef<SVGSVGElement, ScribbleOffOutlineLogoProps>(
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
      <path d="M3 15c2 3 4 4 7 4c1.95 0 4.324 -1.268 5.746 -3.256m1.181 -2.812a5.97 5.97 0 0 0 .073 -.932c0 -4 -3 -7 -6 -7c-.642 0 -1.239 .069 -1.78 .201m-2.492 1.515c-.47 .617 -.728 1.386 -.728 2.284c0 2.5 2 5 6 5c.597 0 1.203 -.055 1.808 -.156m3.102 -.921c2.235 -.953 4.152 -2.423 5.09 -3.923" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ScribbleOffOutlineLogo.displayName = "ScribbleOffOutlineLogo";

export const ScribbleOffOutlineLogoMetadata = {
  id: "scribble-off-outline",
  baseId: "scribble-off-outline",
  variant: "default",
  name: "Scribble Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScribbleOffOutlineLogo;
