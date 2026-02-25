/**
 * Auto-generated logo component: Clipboard Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClipboardOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClipboardOffOutlineLogo = React.forwardRef<SVGSVGElement, ClipboardOffOutlineLogoProps>(
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
      <path d="M5.575 5.597a2 2 0 0 0 -.575 1.403v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-8a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 1 1 0 4h-2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ClipboardOffOutlineLogo.displayName = "ClipboardOffOutlineLogo";

export const ClipboardOffOutlineLogoMetadata = {
  id: "clipboard-off-outline",
  baseId: "clipboard-off-outline",
  variant: "default",
  name: "Clipboard Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClipboardOffOutlineLogo;
