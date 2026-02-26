
'use client';
import React from 'react';

export interface Arrows5SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows5Sketch = React.forwardRef<SVGSVGElement, Arrows5SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M87.0306 57.8775C73.8306 65.8775 52.2314 141.277 62.8314 142.277C70.0314 142.877 78.231 137.677 82.431 129.677C85.631 123.877 104.031 57.4773 103.031 55.6773C101.431 52.6773 93.6306 53.8775 87.0306 57.8775ZM51.431 233.878C49.031 283.078 56.6314 297.876 74.8314 278.276C81.0314 271.476 83.4306 223.476 81.0306 197.077C78.6306 169.677 54.431 174.078 51.431 233.878ZM81.2308 334.878C66.2308 345.278 75.8308 379.878 100.231 403.878C127.031 430.278 160.231 440.676 174.431 427.076C183.031 418.876 182.231 416.676 167.631 410.076C133.031 394.476 112.831 373.078 102.631 341.678C99.6312 332.078 89.6308 328.878 81.2308 334.878ZM311.23 335.276C307.03 338.876 307.032 339.476 309.632 351.076C311.032 357.676 314.832 375.478 314.832 375.478L284.03 385.678C253.23 395.878 221.032 404.076 211.632 404.076C201.632 404.076 206.63 411.678 224.43 422.878C238.43 431.878 283.632 421.278 320.832 400.678C322.232 399.878 330.43 427.078 331.03 434.878C332.03 448.478 357.032 455.478 374.632 423.678C384.232 406.478 425.83 364.278 439.23 358.478C457.03 350.678 447.43 341.076 424.23 343.076C387.63 346.276 323.63 324.476 311.23 335.276Z" fill="currentColor"/>
    </svg>
  )
);

Arrows5Sketch.displayName = "Arrows5Sketch";

export const Arrows5SketchMetadata = {
  id: "arrows5_sketch",
  baseId: "arrows5",
  variant: "sketch",
  name: "Arrows5",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows5Sketch;
