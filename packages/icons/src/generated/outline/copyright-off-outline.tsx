/**
 * Auto-generated logo component: Copyright Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CopyrightOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CopyrightOffOutlineLogo = React.forwardRef<SVGSVGElement, CopyrightOffOutlineLogoProps>(
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
      <path d="M14 9.75a3.016 3.016 0 0 0 -.711 -.466m-3.41 .596a2.993 2.993 0 0 0 -.042 4.197a3.016 3.016 0 0 0 4.163 .173" />
  <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CopyrightOffOutlineLogo.displayName = "CopyrightOffOutlineLogo";

export const CopyrightOffOutlineLogoMetadata = {
  id: "copyright-off-outline",
  baseId: "copyright-off-outline",
  variant: "default",
  name: "Copyright Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CopyrightOffOutlineLogo;
