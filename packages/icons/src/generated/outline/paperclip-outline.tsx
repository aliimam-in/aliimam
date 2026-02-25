/**
 * Auto-generated logo component: Paperclip Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PaperclipOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PaperclipOutlineLogo = React.forwardRef<SVGSVGElement, PaperclipOutlineLogoProps>(
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
      <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
    </svg>
  )
);

PaperclipOutlineLogo.displayName = "PaperclipOutlineLogo";

export const PaperclipOutlineLogoMetadata = {
  id: "paperclip-outline",
  baseId: "paperclip-outline",
  variant: "default",
  name: "Paperclip Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PaperclipOutlineLogo;
