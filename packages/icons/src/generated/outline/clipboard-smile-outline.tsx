/**
 * Auto-generated logo component: Clipboard Smile Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClipboardSmileOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClipboardSmileOutlineLogo = React.forwardRef<SVGSVGElement, ClipboardSmileOutlineLogoProps>(
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
      <path d="M10 13h.01" />
  <path d="M14 13h.01" />
  <path d="M10 16a3.5 3.5 0 0 0 4 0" />
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
    </svg>
  )
);

ClipboardSmileOutlineLogo.displayName = "ClipboardSmileOutlineLogo";

export const ClipboardSmileOutlineLogoMetadata = {
  id: "clipboard-smile-outline",
  baseId: "clipboard-smile-outline",
  variant: "default",
  name: "Clipboard Smile Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClipboardSmileOutlineLogo;
