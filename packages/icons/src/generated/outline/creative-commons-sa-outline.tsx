/**
 * Auto-generated logo component: Creative Commons Sa Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreativeCommonsSaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreativeCommonsSaOutlineLogo = React.forwardRef<SVGSVGElement, CreativeCommonsSaOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 16a4 4 0 1 0 -4 -4v1" />
  <path d="M6 12l2 2l2 -2" />
    </svg>
  )
);

CreativeCommonsSaOutlineLogo.displayName = "CreativeCommonsSaOutlineLogo";

export const CreativeCommonsSaOutlineLogoMetadata = {
  id: "creative-commons-sa-outline",
  baseId: "creative-commons-sa-outline",
  variant: "default",
  name: "Creative Commons Sa Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreativeCommonsSaOutlineLogo;
