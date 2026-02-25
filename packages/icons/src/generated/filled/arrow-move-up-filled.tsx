/**
 * Auto-generated logo component: Arrow Move Up Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowMoveUpFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowMoveUpFilledLogo = React.forwardRef<SVGSVGElement, ArrowMoveUpFilledLogoProps>(
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
      <path d="M11.852 2.011l.058 -.007l.09 -.004l.075 .003l.126 .017l.111 .03l.111 .044l.098 .052l.104 .074l.082 .073l3 3a1 1 0 1 1 -1.414 1.414l-1.293 -1.292v7.585a1 1 0 0 1 -2 0v-7.585l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 0 -1.414l3 -3q .053 -.054 .112 -.097l.11 -.071l.114 -.054l.105 -.035z" />
  <path d="M12 16a3 3 0 1 1 0 6a3 3 0 0 1 0 -6" />
    </svg>
  )
);

ArrowMoveUpFilledLogo.displayName = "ArrowMoveUpFilledLogo";

export const ArrowMoveUpFilledLogoMetadata = {
  id: "arrow-move-up-filled",
  baseId: "arrow-move-up-filled",
  variant: "default",
  name: "Arrow Move Up Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowMoveUpFilledLogo;
