/**
 * Auto-generated logo component: Ikosaedr Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IkosaedrOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IkosaedrOutlineLogo = React.forwardRef<SVGSVGElement, IkosaedrOutlineLogoProps>(
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
      <path d="M21 8.007v7.986a2 2 0 0 1 -1.006 1.735l-7 4.007a2 2 0 0 1 -1.988 0l-7 -4.007a2 2 0 0 1 -1.006 -1.735v-7.986a2 2 0 0 1 1.006 -1.735l7 -4.007a2 2 0 0 1 1.988 0l7 4.007a2 2 0 0 1 1.006 1.735" />
  <path d="M3.29 6.97l4.21 2.03" />
  <path d="M20.71 6.97l-4.21 2.03" />
  <path d="M20.7 17h-17.4" />
  <path d="M11.76 2.03l-4.26 6.97l-4.3 7.84" />
  <path d="M12.24 2.03q 2.797 4.44 4.26 6.97t 4.3 7.84" />
  <path d="M12 17l-4.5 -8h9l-4.5 8" />
  <path d="M12 17v5" />
    </svg>
  )
);

IkosaedrOutlineLogo.displayName = "IkosaedrOutlineLogo";

export const IkosaedrOutlineLogoMetadata = {
  id: "ikosaedr-outline",
  baseId: "ikosaedr-outline",
  variant: "default",
  name: "Ikosaedr Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IkosaedrOutlineLogo;
