/**
 * Auto-generated logo component: Paperclip (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PaperclipLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PaperclipLogo = React.forwardRef<SVGSVGElement, PaperclipLogoProps>(
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
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
    </svg>
  )
);

PaperclipLogo.displayName = "PaperclipLogo";

export const PaperclipLogoMetadata = {
  id: "paperclip",
  baseId: "paperclip",
  variant: "default",
  name: "Paperclip",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PaperclipLogo;
