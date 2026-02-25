/**
 * Auto-generated logo component: Border Bottom Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderBottomPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderBottomPlusOutlineLogo = React.forwardRef<SVGSVGElement, BorderBottomPlusOutlineLogoProps>(
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
      <path d="M4 20h16" />
  <path d="M4 16v-.01" />
  <path d="M20 16v-.01" />
  <path d="M4 12v-.01" />
  <path d="M20 12v-.01" />
  <path d="M4 8v-.01" />
  <path d="M20 8v-.01" />
  <path d="M4 4v-.01" />
  <path d="M8 4v-.01" />
  <path d="M12 4v-.01" />
  <path d="M16 4v-.01" />
  <path d="M20 4v-.01" />
  <path d="M15 12h-6" />
  <path d="M12 9v6" />
    </svg>
  )
);

BorderBottomPlusOutlineLogo.displayName = "BorderBottomPlusOutlineLogo";

export const BorderBottomPlusOutlineLogoMetadata = {
  id: "border-bottom-plus-outline",
  baseId: "border-bottom-plus-outline",
  variant: "default",
  name: "Border Bottom Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderBottomPlusOutlineLogo;
