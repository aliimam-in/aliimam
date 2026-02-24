/**
 * Auto-generated logo component: Clipboard (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixClipboardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixClipboardLogo = React.forwardRef<SVGSVGElement, MixClipboardLogoProps>(
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
);

MixClipboardLogo.displayName = "MixClipboardLogo";

export const MixClipboardLogoMetadata = {
  id: "clipboard",
  baseId: "clipboard",
  variant: "default",
  name: "Clipboard",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixClipboardLogo;
