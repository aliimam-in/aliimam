/**
 * Auto-generated logo component: Microsoft Windows Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicrosoftWindowsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MicrosoftWindowsIcon = React.forwardRef<SVGSVGElement, MicrosoftWindowsIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M0,2.84217094e-14 L121.32899,2.84217094e-14 L121.32899,121.32899 L0,121.32899 L0,2.84217094e-14 Z M134.67101,2.84217094e-14 L256,2.84217094e-14 L256,121.32899 L134.67101,121.32899 L134.67101,2.84217094e-14 Z M0,134.67101 L121.32899,134.67101 L121.32899,256 L0,256 L0,134.67101 Z M134.67101,134.67101 L256,134.67101 L256,256 L134.67101,256 L134.67101,134.67101 Z" fill="#0078D4"></path>
    </g>
    </svg>
  )
);

MicrosoftWindowsIcon.displayName = "MicrosoftWindowsIcon";

export const MicrosoftWindowsIconMetadata = {
  id: "microsoft-windows-icon",
  baseId: "microsoft-windows-icon",
  variant: "default",
  name: "Microsoft Windows Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default MicrosoftWindowsIcon;
