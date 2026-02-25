/**
 * Auto-generated logo component: Clipboard Plus (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClipboardPlusFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClipboardPlusFilledLogo = React.forwardRef<SVGSVGElement, ClipboardPlusFilledLogoProps>(
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
      <path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-5.997 6.83a1 1 0 0 0 -1 1v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0 -2h-1v-1a1 1 0 0 0 -1 -1m2 -9a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z" />
    </svg>
  )
);

ClipboardPlusFilledLogo.displayName = "ClipboardPlusFilledLogo";

export const ClipboardPlusFilledLogoMetadata = {
  id: "clipboard-plus_filled",
  baseId: "clipboard-plus",
  variant: "filled",
  name: "Clipboard Plus",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClipboardPlusFilledLogo;
