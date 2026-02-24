/**
 * Auto-generated logo component: Copy (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CopyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CopyLogo = React.forwardRef<SVGSVGElement, CopyLogoProps>(
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
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  )
);

CopyLogo.displayName = "CopyLogo";

export const CopyLogoMetadata = {
  id: "copy",
  baseId: "copy",
  variant: "default",
  name: "Copy",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CopyLogo;
