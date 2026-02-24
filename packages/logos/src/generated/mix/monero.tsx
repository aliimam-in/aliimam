/**
 * Auto-generated logo component: Monero (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoneroLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MoneroLogo = React.forwardRef<SVGSVGElement, MoneroLogoProps>(
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
      <path fill="#F60" d="M128 0A128 128 0 0 0 7 168h38V61l83 83 83-83v107h38A128 128 0 0 0 128 0" /><path fill="#4C4C4C" d="m109 163-36-36v68H19a128 128 0 0 0 218 0h-54v-68l-36 36-19 19-19-19Z" />
    </svg>
  )
);

MoneroLogo.displayName = "MoneroLogo";

export const MoneroLogoMetadata = {
  id: "monero",
  baseId: "monero",
  variant: "default",
  name: "Monero",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default MoneroLogo;
