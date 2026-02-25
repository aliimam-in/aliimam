/**
 * Auto-generated logo component: Align Start Vertical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignStartVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignStartVerticalLogo = React.forwardRef<SVGSVGElement, AlignStartVerticalLogoProps>(
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
      <rect width="9" height="6" x="6" y="14" rx="2" />
  <rect width="16" height="6" x="6" y="4" rx="2" />
  <path d="M2 2v20" />
    </svg>
  )
);

AlignStartVerticalLogo.displayName = "AlignStartVerticalLogo";

export const AlignStartVerticalLogoMetadata = {
  id: "align-start-vertical",
  baseId: "align-start-vertical",
  variant: "default",
  name: "Align Start Vertical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignStartVerticalLogo;
