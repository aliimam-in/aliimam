
'use client';
import React from 'react';

export interface Abstract70SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract70Sketch = React.forwardRef<SVGSVGElement, Abstract70SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 446 446"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M326.712 273.623C306.883 281.867 290.952 284.876 266.666 284.876C219.877 284.876 180.774 262.149 130.42 265.491C70.8196 269.502 83.9651 293.899 95.3282 290.78C118.5 284.207 124.739 282.536 139.332 281.868C199.379 279.194 225.781 303.145 280.257 300.36C298.639 299.469 320.808 293.788 334.288 287.884C356.234 278.192 345.762 265.602 326.712 273.623Z" fill="currentColor"/>
<path d="M102.124 171.912C134.765 155.87 149.024 154.645 186.679 164.671C260.539 184.167 272.57 185.504 303.763 177.372C318.691 173.473 343.757 160.55 343.757 156.762C343.757 148.407 332.839 147.292 320.362 154.422C274.019 180.936 232.131 165.897 204.503 158.433C179.215 151.638 147.91 141.054 124.293 146.179C97.779 151.86 74.05 166.454 79.0631 174.03C83.0737 180.157 85.9701 179.933 102.124 171.912Z" fill="currentColor"/>
<path d="M378.18 182.496C357.794 196.755 345.428 203.216 329.609 207.895C286.05 220.818 244.051 221.821 196.705 210.792C150.695 200.209 119.057 201.323 84.0763 214.691C56.2255 225.386 44.9738 233.853 52.3264 238.643C55.6685 240.76 55.3345 240.871 89.5352 229.619C132.537 215.471 156.377 214.023 199.49 223.158C253.855 234.632 297.636 233.852 339.412 220.707C363.364 213.131 395.225 194.304 395.894 187.175C396.673 179.376 386.536 176.591 378.18 182.496Z" fill="currentColor"/>
    </svg>
  )
);

Abstract70Sketch.displayName = "Abstract70Sketch";

export const Abstract70SketchMetadata = {
  id: "abstract70_sketch",
  baseId: "abstract70",
  variant: "sketch",
  name: "Abstract70",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract70Sketch;
