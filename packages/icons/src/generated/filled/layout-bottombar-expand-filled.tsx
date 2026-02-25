/**
 * Auto-generated logo component: Layout Bottombar Expand Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutBottombarExpandFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutBottombarExpandFilledLogo = React.forwardRef<SVGSVGElement, LayoutBottombarExpandFilledLogoProps>(
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
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-12a1 1 0 0 0 -.993 .883l-.007 .117v9h14v-9a1 1 0 0 0 -.883 -.993l-.117 -.007zm-5.387 3.21l.094 .083l2 2a1 1 0 0 1 -1.32 1.497l-.094 -.083l-1.293 -1.292l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.32 -.083z" />
    </svg>
  )
);

LayoutBottombarExpandFilledLogo.displayName = "LayoutBottombarExpandFilledLogo";

export const LayoutBottombarExpandFilledLogoMetadata = {
  id: "layout-bottombar-expand-filled",
  baseId: "layout-bottombar-expand-filled",
  variant: "default",
  name: "Layout Bottombar Expand Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutBottombarExpandFilledLogo;
