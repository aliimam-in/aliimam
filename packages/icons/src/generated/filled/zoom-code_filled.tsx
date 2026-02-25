/**
 * Auto-generated logo component: Zoom Code (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomCodeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomCodeFilledLogo = React.forwardRef<SVGSVGElement, ZoomCodeFilledLogoProps>(
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
      <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-5.293 4.22a1 1 0 0 0 -1.414 0l-2 2a1 1 0 0 0 0 1.415l2 2a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-1.292 -1.293l1.292 -1.293a1 1 0 0 0 0 -1.414m4 0a1 1 0 0 0 -1.414 0l-.083 .095a1 1 0 0 0 .083 1.32l1.292 1.292l-1.292 1.293a1 1 0 0 0 1.414 1.414l2 -2a1 1 0 0 0 0 -1.414z" />
    </svg>
  )
);

ZoomCodeFilledLogo.displayName = "ZoomCodeFilledLogo";

export const ZoomCodeFilledLogoMetadata = {
  id: "zoom-code_filled",
  baseId: "zoom-code",
  variant: "filled",
  name: "Zoom Code",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomCodeFilledLogo;
