/**
 * Auto-generated logo component: Karma (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KarmaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Karma = React.forwardRef<SVGSVGElement, KarmaProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 198"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M154.565149,138.601931 L193.810636,197.149425 L255.853854,197.149425 L185.543111,93.2663908 L154.565149,138.601931" fill="#429F87"></path>
        <path d="M29.4919847,169.993808 L58.2277395,142.923525 L104.170421,197.149425 L74.6784368,88.3749272 L49.7777778,129.336889 L29.4919847,169.993808" fill="#429F87"></path>
        <path d="M29.4919847,169.993808 L74.6784368,88.3749272 L45.9495479,115.457962 L0,61.2300996 L29.4919847,169.993808" fill="#56C5A8"></path>
        <path d="M249.938391,0.603218391 L187.895172,0.603218391 L149.896337,56.7466667 L149.896337,0.603218391 L92.9848889,0.603218391 L92.9848889,58.8319387 L123.329226,170.665686 L130.400123,197.149425 L149.896337,197.149425 L149.896337,148.011157 L249.938391,0.603218391" fill="#56C5A8"></path>
    </g>
    </svg>
  )
);

Karma.displayName = "Karma";

export const KarmaMetadata = {
  id: "karma",
  baseId: "karma",
  variant: "default",
  name: "Karma",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 198",
} as const;

export default Karma;
