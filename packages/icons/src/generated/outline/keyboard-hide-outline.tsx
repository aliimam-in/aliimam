/**
 * Auto-generated logo component: Keyboard Hide Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KeyboardHideOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KeyboardHideOutlineLogo = React.forwardRef<SVGSVGElement, KeyboardHideOutlineLogoProps>(
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
      <path d="M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M6 7l0 .01" />
  <path d="M10 7l0 .01" />
  <path d="M14 7l0 .01" />
  <path d="M18 7l0 .01" />
  <path d="M6 11l0 .01" />
  <path d="M18 11l0 .01" />
  <path d="M10 11l4 0" />
  <path d="M10 21l2 -2l2 2" />
    </svg>
  )
);

KeyboardHideOutlineLogo.displayName = "KeyboardHideOutlineLogo";

export const KeyboardHideOutlineLogoMetadata = {
  id: "keyboard-hide-outline",
  baseId: "keyboard-hide-outline",
  variant: "default",
  name: "Keyboard Hide Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KeyboardHideOutlineLogo;
