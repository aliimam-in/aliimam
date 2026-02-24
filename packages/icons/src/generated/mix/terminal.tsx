/**
 * Auto-generated logo component: Terminal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixTerminalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixTerminalLogo = React.forwardRef<SVGSVGElement, MixTerminalLogoProps>(
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
      <path d="M12 19h8" />
  <path d="m4 17 6-6-6-6" />
    </svg>
  )
);

MixTerminalLogo.displayName = "MixTerminalLogo";

export const MixTerminalLogoMetadata = {
  id: "terminal",
  baseId: "terminal",
  variant: "default",
  name: "Terminal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixTerminalLogo;
