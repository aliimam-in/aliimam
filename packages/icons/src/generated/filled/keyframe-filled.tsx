/**
 * Auto-generated logo component: Keyframe Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KeyframeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KeyframeFilledLogo = React.forwardRef<SVGSVGElement, KeyframeFilledLogoProps>(
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
      <path d="M12 4a2.599 2.599 0 0 0 -2 .957l-4.355 5.24a2.847 2.847 0 0 0 -.007 3.598l4.368 5.256c.499 .6 1.225 .949 1.994 .949a2.599 2.599 0 0 0 2 -.957l4.355 -5.24a2.847 2.847 0 0 0 .007 -3.598l-4.368 -5.256a2.593 2.593 0 0 0 -1.994 -.949z" />
    </svg>
  )
);

KeyframeFilledLogo.displayName = "KeyframeFilledLogo";

export const KeyframeFilledLogoMetadata = {
  id: "keyframe-filled",
  baseId: "keyframe-filled",
  variant: "default",
  name: "Keyframe Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KeyframeFilledLogo;
