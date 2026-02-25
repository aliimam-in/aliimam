/**
 * Auto-generated logo component: Arrow Down Square Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownSquareFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownSquareFilledLogo = React.forwardRef<SVGSVGElement, ArrowDownSquareFilledLogoProps>(
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
      <path d="M14 2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-1v10.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-10.586h-1a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
    </svg>
  )
);

ArrowDownSquareFilledLogo.displayName = "ArrowDownSquareFilledLogo";

export const ArrowDownSquareFilledLogoMetadata = {
  id: "arrow-down-square-filled",
  baseId: "arrow-down-square-filled",
  variant: "default",
  name: "Arrow Down Square Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownSquareFilledLogo;
