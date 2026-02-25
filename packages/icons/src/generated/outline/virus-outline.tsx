/**
 * Auto-generated logo component: Virus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VirusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VirusOutlineLogo = React.forwardRef<SVGSVGElement, VirusOutlineLogoProps>(
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
      <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M12 7v-4" />
  <path d="M11 3h2" />
  <path d="M15.536 8.464l2.828 -2.828" />
  <path d="M17.657 4.929l1.414 1.414" />
  <path d="M17 12h4" />
  <path d="M21 11v2" />
  <path d="M15.535 15.536l2.829 2.828" />
  <path d="M19.071 17.657l-1.414 1.414" />
  <path d="M12 17v4" />
  <path d="M13 21h-2" />
  <path d="M8.465 15.536l-2.829 2.828" />
  <path d="M6.343 19.071l-1.413 -1.414" />
  <path d="M7 12h-4" />
  <path d="M3 13v-2" />
  <path d="M8.464 8.464l-2.828 -2.828" />
  <path d="M4.929 6.343l1.414 -1.413" />
    </svg>
  )
);

VirusOutlineLogo.displayName = "VirusOutlineLogo";

export const VirusOutlineLogoMetadata = {
  id: "virus-outline",
  baseId: "virus-outline",
  variant: "default",
  name: "Virus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VirusOutlineLogo;
