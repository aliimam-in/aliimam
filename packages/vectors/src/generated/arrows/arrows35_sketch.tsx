
'use client';
import React from 'react';

export interface Arrows35SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows35Sketch = React.forwardRef<SVGSVGElement, Arrows35SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_628_629)">
<path fillRule="evenodd" clipRule="evenodd" d="M13.0197 69.5831C-9.69454 95.5831 -11.5514 342.297 101.877 419.011C145.734 448.725 252.163 431.868 372.591 376.44C392.449 367.297 406.02 360.868 426.449 354.868C427.734 354.44 421.02 362.011 411.306 371.725C388.306 394.725 380.306 409.297 384.591 420.582C386.734 426.011 389.306 425.011 396.449 416.011C416.877 390.154 443.163 369.44 485.02 346.583C501.449 337.583 513.734 315.868 466.449 315.868C426.449 315.868 402.306 312.725 365.306 302.297C341.306 295.583 328.734 305.725 343.591 319.725C348.734 324.583 374.02 332.154 401.163 337.011L415.02 339.44C366.02 361.868 363.02 363.44 322.591 378.868C226.449 415.44 153.449 422.154 116.305 397.725C22.448 335.868 20.02 168.297 19.02 69.0118C19.02 66.2975 15.5911 66.5831 13.0197 69.5831Z" />
</g>
<defs>
<clipPath id="clip0_628_629">
<rect width="500" height="500" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Arrows35Sketch.displayName = "Arrows35Sketch";

export const Arrows35SketchMetadata = {
  id: "arrows35_sketch",
  baseId: "arrows35",
  variant: "sketch",
  name: "Arrows35",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows35Sketch;
