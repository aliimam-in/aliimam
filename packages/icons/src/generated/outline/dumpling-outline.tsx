/**
 * Auto-generated logo component: Dumpling Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DumplingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DumplingOutlineLogo = React.forwardRef<SVGSVGElement, DumplingOutlineLogoProps>(
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
      <path d="M5.532 5.532a2.53 2.53 0 0 1 2.56 -.623a2.532 2.532 0 0 1 4.604 -.717q .146 -.24 .356 -.45a2.532 2.532 0 0 1 4.318 1.637a2.53 2.53 0 0 1 2.844 .511l.358 .358c1.384 1.385 -.7 5.713 -4.655 9.669c-3.956 3.955 -8.284 6.04 -9.669 4.655l-.358 -.358l-.114 -.122a2.53 2.53 0 0 1 -.398 -2.724a2.532 2.532 0 0 1 -1.186 -4.675a2.532 2.532 0 0 1 .718 -4.603a2.53 2.53 0 0 1 .622 -2.558" />
    </svg>
  )
);

DumplingOutlineLogo.displayName = "DumplingOutlineLogo";

export const DumplingOutlineLogoMetadata = {
  id: "dumpling-outline",
  baseId: "dumpling-outline",
  variant: "default",
  name: "Dumpling Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DumplingOutlineLogo;
