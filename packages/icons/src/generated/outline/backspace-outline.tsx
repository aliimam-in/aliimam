/**
 * Auto-generated logo component: Backspace Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BackspaceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BackspaceOutlineLogo = React.forwardRef<SVGSVGElement, BackspaceOutlineLogoProps>(
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
      <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5l11 0" />
  <path d="M12 10l4 4m0 -4l-4 4" />
    </svg>
  )
);

BackspaceOutlineLogo.displayName = "BackspaceOutlineLogo";

export const BackspaceOutlineLogoMetadata = {
  id: "backspace-outline",
  baseId: "backspace-outline",
  variant: "default",
  name: "Backspace Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BackspaceOutlineLogo;
