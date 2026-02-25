/**
 * Auto-generated logo component: Clipboard Typography Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClipboardTypographyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClipboardTypographyOutlineLogo = React.forwardRef<SVGSVGElement, ClipboardTypographyOutlineLogoProps>(
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
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
  <path d="M9 12v-1h6v1" />
  <path d="M12 11v6" />
  <path d="M11 17h2" />
    </svg>
  )
);

ClipboardTypographyOutlineLogo.displayName = "ClipboardTypographyOutlineLogo";

export const ClipboardTypographyOutlineLogoMetadata = {
  id: "clipboard-typography-outline",
  baseId: "clipboard-typography-outline",
  variant: "default",
  name: "Clipboard Typography Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClipboardTypographyOutlineLogo;
