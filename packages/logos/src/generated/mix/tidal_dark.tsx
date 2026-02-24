/**
 * Auto-generated logo component: Tidal (dark)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TidalDarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TidalDark = React.forwardRef<SVGSVGElement, TidalDarkProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1001.000000 667.000000"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(0.000000,667.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
<path d="M840 5835 l-835 -835 830 -830 c456 -456 834 -830 840 -830 5 0 383
374 840 830 l830 830 830 -830 830 -830 -835 -835 -835 -835 835 -835 835
-835 835 835 835 835 -833 833 -832 832 833 833 832 832 833 -832 832 -833
835 835 835 835 -835 835 -835 835 -835 -835 -835 -835 -833 833 -832 832
-833 -832 -832 -833 -833 833 -832 832 -835 -835z" />
</g>
    </svg>
  )
);

TidalDark.displayName = "TidalDark";

export const TidalDarkMetadata = {
  id: "tidal_dark",
  baseId: "tidal",
  variant: "dark",
  name: "Tidal",
  category: "mix",
  tags: [],
  viewBox: "0 0 1001.000000 667.000000",
} as const;

export default TidalDark;
