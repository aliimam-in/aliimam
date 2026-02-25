/**
 * Auto-generated logo component: Layout Board Split (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutBoardSplitFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutBoardSplitFilledLogo = React.forwardRef<SVGSVGElement, LayoutBoardSplitFilledLogoProps>(
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
      <path d="M5 3h5a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2" />
  <path d="M14 3h5a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
  <path d="M13 11a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
  <path d="M14 16h6a1 1 0 0 1 1 1v2a2 2 0 0 1 -2 2h-5a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
  <path d="M4 13h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-5a2 2 0 0 1 -2 -2v-5a1 1 0 0 1 1 -1" />
    </svg>
  )
);

LayoutBoardSplitFilledLogo.displayName = "LayoutBoardSplitFilledLogo";

export const LayoutBoardSplitFilledLogoMetadata = {
  id: "layout-board-split_filled",
  baseId: "layout-board-split",
  variant: "filled",
  name: "Layout Board Split",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutBoardSplitFilledLogo;
