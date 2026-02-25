/**
 * Auto-generated logo component: Blob Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlobOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlobOutlineLogo = React.forwardRef<SVGSVGElement, BlobOutlineLogoProps>(
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
      <path d="M5.897 20.188c1.67 .752 3.896 .812 6.103 .812s4.434 -.059 6.104 -.812c.868 -.392 1.614 -.982 2.133 -1.856c.514 -.865 .763 -1.94 .763 -3.234c0 -2.577 -.983 -5.315 -2.557 -7.416c-1.57 -2.094 -3.833 -3.682 -6.443 -3.682s-4.873 1.588 -6.443 3.682c-1.574 2.101 -2.557 4.84 -2.557 7.416c0 1.295 .249 2.369 .763 3.234c.519 .874 1.265 1.464 2.134 1.856" />
    </svg>
  )
);

BlobOutlineLogo.displayName = "BlobOutlineLogo";

export const BlobOutlineLogoMetadata = {
  id: "blob-outline",
  baseId: "blob-outline",
  variant: "default",
  name: "Blob Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlobOutlineLogo;
