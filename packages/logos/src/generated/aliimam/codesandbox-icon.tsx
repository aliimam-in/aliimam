/**
 * Auto-generated logo component: Codesandbox Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodesandboxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CodesandboxIcon = React.forwardRef<SVGSVGElement, CodesandboxIconProps>(
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
        <path d="M256,0 L256,256 L0,256 L0,0 L256,0 Z M229.818182,26.1818182 L26.1818182,26.1818182 L26.1818182,229.818182 L229.818182,229.818182 L229.818182,26.1818182 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

CodesandboxIcon.displayName = "CodesandboxIcon";

export const CodesandboxIconMetadata = {
  id: "codesandbox-icon",
  baseId: "codesandbox-icon",
  variant: "default",
  name: "Codesandbox Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default CodesandboxIcon;
