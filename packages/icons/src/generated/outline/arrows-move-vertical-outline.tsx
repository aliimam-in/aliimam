/**
 * Auto-generated logo component: Arrows Move Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsMoveVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsMoveVerticalOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsMoveVerticalOutlineLogoProps>(
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
      <path d="M9 18l3 3l3 -3" />
  <path d="M12 15v6" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M12 3v6" />
    </svg>
  )
);

ArrowsMoveVerticalOutlineLogo.displayName = "ArrowsMoveVerticalOutlineLogo";

export const ArrowsMoveVerticalOutlineLogoMetadata = {
  id: "arrows-move-vertical-outline",
  baseId: "arrows-move-vertical-outline",
  variant: "default",
  name: "Arrows Move Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsMoveVerticalOutlineLogo;
