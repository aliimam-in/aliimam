/**
 * Auto-generated logo component: Settings Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SettingsHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SettingsHeartOutlineLogo = React.forwardRef<SVGSVGElement, SettingsHeartOutlineLogoProps>(
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
      <path d="M11.231 20.828a1.668 1.668 0 0 1 -.906 -1.145a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c.509 .123 .87 .421 1.084 .792" />
  <path d="M14.882 11.165a3.001 3.001 0 1 0 -4.31 3.474" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
    </svg>
  )
);

SettingsHeartOutlineLogo.displayName = "SettingsHeartOutlineLogo";

export const SettingsHeartOutlineLogoMetadata = {
  id: "settings-heart-outline",
  baseId: "settings-heart-outline",
  variant: "default",
  name: "Settings Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SettingsHeartOutlineLogo;
