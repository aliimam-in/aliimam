/**
 * Auto-generated logo component: Biomejs (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BiomejsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BiomejsLogo = React.forwardRef<SVGSVGElement, BiomejsLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 55.425"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect id="background" width="100%" height="100%" fill="none" />
 <path id="emblem" d="m32 0-14.255 24.69c5.409-1.6676 11.228-1.9148 16.869-0.58434l4.8177 1.1372-4.5328 19.22-4.8247-1.1372c-5.9293-1.3987-11.628 1.716-14.036 6.6851l-4.4595-2.1575c3.4034-7.0291 11.424-11.285 19.636-9.3476l2.2595-9.579c-8.0938-1.9081-16.624-9e-3 -23.145 5.153-6.5204 5.1607-10.329 13.028-10.329 21.344l64 7.9e-4z" fill="#60a5fa" strokeLinecap="square" strokeWidth="4.8768" style={{paintOrder:"markers fill stroke"}} />
    </svg>
  )
);

BiomejsLogo.displayName = "BiomejsLogo";

export const BiomejsLogoMetadata = {
  id: "biomejs",
  baseId: "biomejs",
  variant: "default",
  name: "Biomejs",
  category: "mix",
  tags: [],
  viewBox: "0 0 64 55.425",
} as const;

export default BiomejsLogo;
