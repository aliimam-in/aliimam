/**
 * Auto-generated logo component: Zoom Cancel Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomCancelFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomCancelFilledLogo = React.forwardRef<SVGSVGElement, ZoomCancelFilledLogoProps>(
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
      <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-5.293 4.22a1 1 0 0 0 -1.414 1.415l1.292 1.293l-1.292 1.293a1 1 0 0 0 1.414 1.414l1.293 -1.292l1.293 1.292a1 1 0 0 0 1.414 -1.414l-1.292 -1.293l1.292 -1.293a1 1 0 1 0 -1.414 -1.414l-1.293 1.292z" />
    </svg>
  )
);

ZoomCancelFilledLogo.displayName = "ZoomCancelFilledLogo";

export const ZoomCancelFilledLogoMetadata = {
  id: "zoom-cancel-filled",
  baseId: "zoom-cancel-filled",
  variant: "default",
  name: "Zoom Cancel Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomCancelFilledLogo;
