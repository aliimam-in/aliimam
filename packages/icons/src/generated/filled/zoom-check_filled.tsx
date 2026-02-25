/**
 * Auto-generated logo component: Zoom Check (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomCheckFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomCheckFilledLogo = React.forwardRef<SVGSVGElement, ZoomCheckFilledLogoProps>(
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
      <path d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-.293 4.22a1 1 0 0 0 -1.414 0l-3.293 3.294l-1.293 -1.293l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
    </svg>
  )
);

ZoomCheckFilledLogo.displayName = "ZoomCheckFilledLogo";

export const ZoomCheckFilledLogoMetadata = {
  id: "zoom-check_filled",
  baseId: "zoom-check",
  variant: "filled",
  name: "Zoom Check",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomCheckFilledLogo;
