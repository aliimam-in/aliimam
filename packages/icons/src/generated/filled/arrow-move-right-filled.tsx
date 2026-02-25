/**
 * Auto-generated logo component: Arrow Move Right Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowMoveRightFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowMoveRightFilledLogo = React.forwardRef<SVGSVGElement, ArrowMoveRightFilledLogoProps>(
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
      <path d="M18.707 8.293l3 3q .054 .053 .097 .112l.071 .11l.054 .114l.035 .105l.03 .148l.006 .118l-.003 .075l-.017 .126l-.03 .111l-.044 .111l-.052 .098l-.074 .104l-.073 .082l-3 3a1 1 0 0 1 -1.414 -1.414l1.292 -1.293h-7.585a1 1 0 0 1 0 -2h7.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0m-13.707 .707a3 3 0 1 1 0 6a3 3 0 0 1 0 -6" />
    </svg>
  )
);

ArrowMoveRightFilledLogo.displayName = "ArrowMoveRightFilledLogo";

export const ArrowMoveRightFilledLogoMetadata = {
  id: "arrow-move-right-filled",
  baseId: "arrow-move-right-filled",
  variant: "default",
  name: "Arrow Move Right Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowMoveRightFilledLogo;
