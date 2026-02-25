/**
 * Auto-generated logo component: Cloud Data Connection Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudDataConnectionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudDataConnectionOutlineLogo = React.forwardRef<SVGSVGElement, CloudDataConnectionOutlineLogoProps>(
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
      <path d="M5 9.897c0 -1.714 1.46 -3.104 3.26 -3.104c.275 -1.22 1.255 -2.215 2.572 -2.611c1.317 -.397 2.77 -.134 3.811 .69c1.042 .822 1.514 2.08 1.239 3.3h.693a2.42 2.42 0 0 1 2.425 2.414a2.42 2.42 0 0 1 -2.425 2.414h-8.315c-1.8 0 -3.26 -1.39 -3.26 -3.103" />
  <path d="M12 13v3" />
  <path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 18h7" />
  <path d="M3 18h7" />
    </svg>
  )
);

CloudDataConnectionOutlineLogo.displayName = "CloudDataConnectionOutlineLogo";

export const CloudDataConnectionOutlineLogoMetadata = {
  id: "cloud-data-connection-outline",
  baseId: "cloud-data-connection-outline",
  variant: "default",
  name: "Cloud Data Connection Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudDataConnectionOutlineLogo;
