/**
 * Auto-generated logo component: Align Center Vertical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignCenterVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignCenterVerticalLogo = React.forwardRef<SVGSVGElement, AlignCenterVerticalLogoProps>(
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
      <path d="M12 2v20" />
  <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" />
  <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
  <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" />
  <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
    </svg>
  )
);

AlignCenterVerticalLogo.displayName = "AlignCenterVerticalLogo";

export const AlignCenterVerticalLogoMetadata = {
  id: "align-center-vertical",
  baseId: "align-center-vertical",
  variant: "default",
  name: "Align Center Vertical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignCenterVerticalLogo;
