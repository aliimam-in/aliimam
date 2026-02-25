/**
 * Auto-generated logo component: Clipboard Text (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClipboardTextFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClipboardTextFilledLogo = React.forwardRef<SVGSVGElement, ClipboardTextFilledLogoProps>(
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
      <path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-2.997 10.83h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m-1 -9a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z" />
    </svg>
  )
);

ClipboardTextFilledLogo.displayName = "ClipboardTextFilledLogo";

export const ClipboardTextFilledLogoMetadata = {
  id: "clipboard-text_filled",
  baseId: "clipboard-text",
  variant: "filled",
  name: "Clipboard Text",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClipboardTextFilledLogo;
