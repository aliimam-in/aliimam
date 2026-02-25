/**
 * Auto-generated logo component: Binoculars Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BinocularsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BinocularsOutlineLogo = React.forwardRef<SVGSVGElement, BinocularsOutlineLogoProps>(
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
      <path d="M4 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16.346 9.17l-.729 -1.261c-.16 -.248 -1.056 -.203 -1.117 .091l-.177 1.38" />
  <path d="M19.761 14.813l-2.84 -5.133c-.189 -.31 -.592 -.68 -1.421 -.68c-.828 0 -1.5 .448 -1.5 1v6" />
  <path d="M7.654 9.17l.729 -1.261c.16 -.249 1.056 -.203 1.117 .091l.177 1.38" />
  <path d="M4.239 14.813l2.84 -5.133c.189 -.31 .592 -.68 1.421 -.68c.828 0 1.5 .448 1.5 1v6" />
  <path d="M10 12h4v2h-4l0 -2" />
    </svg>
  )
);

BinocularsOutlineLogo.displayName = "BinocularsOutlineLogo";

export const BinocularsOutlineLogoMetadata = {
  id: "binoculars-outline",
  baseId: "binoculars-outline",
  variant: "default",
  name: "Binoculars Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BinocularsOutlineLogo;
