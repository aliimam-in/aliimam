/**
 * Auto-generated logo component: Command (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CommandLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CommandLogo = React.forwardRef<SVGSVGElement, CommandLogoProps>(
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
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
    </svg>
  )
);

CommandLogo.displayName = "CommandLogo";

export const CommandLogoMetadata = {
  id: "command",
  baseId: "command",
  variant: "default",
  name: "Command",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CommandLogo;
