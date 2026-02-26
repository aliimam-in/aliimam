
'use client';
import React from 'react';

export interface Arrows1SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows1Sketch = React.forwardRef<SVGSVGElement, Arrows1SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 490 490"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_628_564)">
<path fillRule="evenodd" clipRule="evenodd" d="M223.105 120.125C138.297 126.136 35.2917 154.081 3.77284 179.751C-4.02565 186.088 1.01103 190.312 12.0589 186.575C28.4682 181.214 69.2478 175.365 121.725 170.978C147.395 168.866 215.631 168.704 238.539 170.978C402.957 186.575 416.442 208.183 298.815 267.972C267.459 283.894 269.571 283.569 258.198 273.658C241.951 259.523 227.004 250.1 224.73 252.537C223.592 253.675 214.494 266.672 204.421 281.457C183.95 311.513 169.492 330.847 155.519 346.607C135.698 369.027 152.594 371.952 265.672 366.103C285.168 365.128 309.538 364.153 319.774 363.828C344.794 363.341 343.332 351.643 315.062 328.573C308.076 322.724 306.776 323.861 330.334 316.55C353.892 309.239 374.85 301.44 399.383 292.667C583.947 226.217 458.522 103.553 223.105 120.125ZM341.382 142.546C455.435 156.031 500.926 197.785 451.048 243.114C431.552 260.661 331.796 302.578 295.403 308.426C284.031 310.214 285.98 316.062 304.014 333.447L318.961 348.069C318.799 348.069 214.981 348.881 172.902 353.755L164.941 354.73C181.838 332.797 209.62 297.216 220.668 280.644C228.466 268.947 230.091 267.322 232.041 269.272C235.453 272.521 266.322 292.505 268.109 295.591C274.77 306.964 378.1 244.414 388.498 222.968C408.969 180.726 319.124 151.481 188.174 150.994C149.507 150.831 146.258 150.669 156.006 148.882C207.345 139.296 291.179 136.697 341.382 142.546Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_628_564">
<rect width="489.03" height="489.03" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Arrows1Sketch.displayName = "Arrows1Sketch";

export const Arrows1SketchMetadata = {
  id: "arrows1_sketch",
  baseId: "arrows1",
  variant: "sketch",
  name: "Arrows1",
  category: "arrows",
  tags: [],
  viewBox: "0 0 490 490",
} as const;

export default Arrows1Sketch;
