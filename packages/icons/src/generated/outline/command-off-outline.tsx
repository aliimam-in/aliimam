/**
 * Auto-generated logo component: Command Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CommandOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CommandOffOutlineLogo = React.forwardRef<SVGSVGElement, CommandOffOutlineLogoProps>(
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
      <path d="M9 9v8a2 2 0 1 1 -2 -2h8m3.411 3.417a2 2 0 0 1 -3.411 -1.417v-2m0 -4v-4a2 2 0 1 1 2 2h-4m-4 0h-2a2 2 0 0 1 -1.417 -3.411" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CommandOffOutlineLogo.displayName = "CommandOffOutlineLogo";

export const CommandOffOutlineLogoMetadata = {
  id: "command-off-outline",
  baseId: "command-off-outline",
  variant: "default",
  name: "Command Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CommandOffOutlineLogo;
