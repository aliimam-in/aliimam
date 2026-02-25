/**
 * Auto-generated logo component: Move Up (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveUpLogo = React.forwardRef<SVGSVGElement, MoveUpLogoProps>(
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
      <path d="M8 6L12 2L16 6" />
  <path d="M12 2V22" />
    </svg>
  )
);

MoveUpLogo.displayName = "MoveUpLogo";

export const MoveUpLogoMetadata = {
  id: "move-up",
  baseId: "move-up",
  variant: "default",
  name: "Move Up",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveUpLogo;
