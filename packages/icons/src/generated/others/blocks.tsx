/**
 * Auto-generated logo component: Blocks (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlocksLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlocksLogo = React.forwardRef<SVGSVGElement, BlocksLogoProps>(
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
      <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
  <rect x="14" y="2" width="8" height="8" rx="1" />
    </svg>
  )
);

BlocksLogo.displayName = "BlocksLogo";

export const BlocksLogoMetadata = {
  id: "blocks",
  baseId: "blocks",
  variant: "default",
  name: "Blocks",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlocksLogo;
