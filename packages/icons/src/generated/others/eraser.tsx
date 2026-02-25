/**
 * Auto-generated logo component: Eraser (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EraserLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EraserLogo = React.forwardRef<SVGSVGElement, EraserLogoProps>(
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
      <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" />
  <path d="m5.082 11.09 8.828 8.828" />
    </svg>
  )
);

EraserLogo.displayName = "EraserLogo";

export const EraserLogoMetadata = {
  id: "eraser",
  baseId: "eraser",
  variant: "default",
  name: "Eraser",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EraserLogo;
