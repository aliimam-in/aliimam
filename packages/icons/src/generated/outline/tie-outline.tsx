/**
 * Auto-generated logo component: Tie Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TieOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TieOutlineLogo = React.forwardRef<SVGSVGElement, TieOutlineLogoProps>(
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
      <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4" />
  <path d="M10.5 7h3l5 5.5" />
    </svg>
  )
);

TieOutlineLogo.displayName = "TieOutlineLogo";

export const TieOutlineLogoMetadata = {
  id: "tie-outline",
  baseId: "tie-outline",
  variant: "default",
  name: "Tie Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TieOutlineLogo;
