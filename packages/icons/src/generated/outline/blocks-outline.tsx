/**
 * Auto-generated logo component: Blocks Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlocksOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlocksOutlineLogo = React.forwardRef<SVGSVGElement, BlocksOutlineLogoProps>(
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
      <path d="M14 4a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1l0 -5" />
  <path d="M3 14h12a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v12" />
    </svg>
  )
);

BlocksOutlineLogo.displayName = "BlocksOutlineLogo";

export const BlocksOutlineLogoMetadata = {
  id: "blocks-outline",
  baseId: "blocks-outline",
  variant: "default",
  name: "Blocks Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlocksOutlineLogo;
