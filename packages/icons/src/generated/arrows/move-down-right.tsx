/**
 * Auto-generated logo component: Move Down Right (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveDownRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveDownRightLogo = React.forwardRef<SVGSVGElement, MoveDownRightLogoProps>(
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
      <path d="M19 13V19H13" />
  <path d="M5 5L19 19" />
    </svg>
  )
);

MoveDownRightLogo.displayName = "MoveDownRightLogo";

export const MoveDownRightLogoMetadata = {
  id: "move-down-right",
  baseId: "move-down-right",
  variant: "default",
  name: "Move Down Right",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveDownRightLogo;
