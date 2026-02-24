/**
 * Auto-generated logo component: Switch Camera (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwitchCameraLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwitchCameraLogo = React.forwardRef<SVGSVGElement, SwitchCameraLogoProps>(
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
      <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
  <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
  <circle cx="12" cy="12" r="3" />
  <path d="m18 22-3-3 3-3" />
  <path d="m6 2 3 3-3 3" />
    </svg>
  )
);

SwitchCameraLogo.displayName = "SwitchCameraLogo";

export const SwitchCameraLogoMetadata = {
  id: "switch-camera",
  baseId: "switch-camera",
  variant: "default",
  name: "Switch Camera",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwitchCameraLogo;
