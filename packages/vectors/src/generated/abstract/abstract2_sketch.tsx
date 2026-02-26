/**
 * Auto-generated logo component: Abstract2 (sketch)
 * Category: abstract
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Abstract2SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract2Sketch = React.forwardRef<SVGSVGElement, Abstract2SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 446 446"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M198.081 41.9687C110.295 60.6843 66.6258 149.805 112.078 217.76L118.762 227.564L108.736 236.256C79.1029 262.324 84.0046 315.349 116.98 325.821C122.104 327.381 122.327 329.832 117.871 333.619C101.16 347.656 103.611 380.186 122.55 394.668C166.22 428.089 245.092 389.321 228.159 342.754C227.491 340.749 230.164 338.744 236.18 336.961C270.715 326.49 298.788 281.485 285.865 257.422C283.86 253.635 284.306 252.741 288.094 251.627C425.787 215.756 338.447 12.1127 198.081 41.9687ZM319.063 162.951C318.841 196.372 300.793 226.45 264.031 236.699C246.652 241.601 241.973 246.725 247.097 254.746C263.139 279.032 234.843 321.144 200.309 324.264C184.044 325.823 176.246 330.948 181.816 336.518C193.625 348.327 194.739 358.796 185.604 373.501C172.681 394.668 149.509 392.44 142.157 369.491C138.369 357.237 147.727 338.075 160.204 332.951C171.121 328.272 169.785 322.702 156.639 318.246C118.762 305.546 114.083 255.192 149.286 240.264C161.318 235.139 161.318 233.357 150.177 213.082C127.674 171.641 135.918 123.96 159.313 91.6537C220.361 7.21055 319.509 84.524 319.063 162.951Z" />
    </svg>
  )
);

Abstract2Sketch.displayName = "Abstract2Sketch";

export const Abstract2SketchMetadata = {
  id: "abstract2_sketch",
  baseId: "abstract2",
  variant: "sketch",
  name: "Abstract2",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract2Sketch;
