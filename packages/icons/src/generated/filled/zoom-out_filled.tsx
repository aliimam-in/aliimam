/**
 * Auto-generated logo component: Zoom Out (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomOutFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomOutFilledLogo = React.forwardRef<SVGSVGElement, ZoomOutFilledLogoProps>(
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
      <path d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-1 5.928h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
  )
);

ZoomOutFilledLogo.displayName = "ZoomOutFilledLogo";

export const ZoomOutFilledLogoMetadata = {
  id: "zoom-out_filled",
  baseId: "zoom-out",
  variant: "filled",
  name: "Zoom Out",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomOutFilledLogo;
