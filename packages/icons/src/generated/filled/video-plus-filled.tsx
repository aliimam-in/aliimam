/**
 * Auto-generated logo component: Video Plus Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VideoPlusFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VideoPlusFilledLogo = React.forwardRef<SVGSVGElement, VideoPlusFilledLogoProps>(
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
      <path d="M13 5a3 3 0 0 1 3 3v.381l3.106 -1.552a2 2 0 0 1 2.894 1.789v6.765a2 2 0 0 1 -2.894 1.787l-3.106 -1.552v.382a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3zm-4 4a1 1 0 0 0 -1 1v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0 -2h-1v-1a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

VideoPlusFilledLogo.displayName = "VideoPlusFilledLogo";

export const VideoPlusFilledLogoMetadata = {
  id: "video-plus-filled",
  baseId: "video-plus-filled",
  variant: "default",
  name: "Video Plus Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VideoPlusFilledLogo;
