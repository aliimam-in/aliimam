/**
 * Auto-generated logo component: Move Up Right (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveUpRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveUpRightLogo = React.forwardRef<SVGSVGElement, MoveUpRightLogoProps>(
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
      <path d="M13 5H19V11" />
  <path d="M19 5L5 19" />
    </svg>
  )
);

MoveUpRightLogo.displayName = "MoveUpRightLogo";

export const MoveUpRightLogoMetadata = {
  id: "move-up-right",
  baseId: "move-up-right",
  variant: "default",
  name: "Move Up Right",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveUpRightLogo;
