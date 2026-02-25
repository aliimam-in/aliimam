/**
 * Auto-generated logo component: Command Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CommandOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CommandOutlineLogo = React.forwardRef<SVGSVGElement, CommandOutlineLogoProps>(
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
      <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
    </svg>
  )
);

CommandOutlineLogo.displayName = "CommandOutlineLogo";

export const CommandOutlineLogoMetadata = {
  id: "command-outline",
  baseId: "command-outline",
  variant: "default",
  name: "Command Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CommandOutlineLogo;
