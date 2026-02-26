
'use client';
import React from 'react';

export interface Abstract60SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract60Sketch = React.forwardRef<SVGSVGElement, Abstract60SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 446 446"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M168.497 80.2278C140.423 108.97 99.0932 169.462 100.876 172.358C106.78 182.05 182.311 215.137 197.907 225.163C198.91 225.831 192.226 233.407 173.956 251.9C157.468 268.61 140.423 286.992 130.174 298.689C117.252 313.505 108.562 309.607 179.86 347.372C240.909 379.679 251.381 382.91 260.182 372.104C268.092 362.3 288.813 340.243 316.441 311.946C351.198 276.52 350.864 277.412 331.702 269.502C325.352 266.94 254.946 235.858 235.784 227.503C226.092 223.27 222.082 228.617 272.213 178.709C288.924 162.11 303.517 147.292 310.981 139.382C321.008 128.688 315.326 124.455 302.069 118.105C271.879 103.734 217.18 80.6737 193.006 71.5386C178.857 66.1913 183.202 65.1884 168.497 80.2278ZM297.056 129.022C296.499 130.582 243.583 180.267 224.867 200.097C209.605 216.362 214.395 216.029 186.99 202.103C143.431 180.045 121.596 174.92 118.477 172.246C117.474 171.021 180.195 89.9199 184.428 81.8989C185.988 78.891 186.099 78.7794 190.221 80.5618C190.221 80.5618 298.393 125.569 297.056 129.022ZM328.36 284.095C311.316 301.029 316.774 295.124 249.264 366.088C237.01 360.963 160.03 320.079 141.092 310.275C144.657 306.71 216.289 234.855 216.846 234.855C216.957 234.855 328.138 283.984 328.36 284.095Z" />
    </svg>
  )
);

Abstract60Sketch.displayName = "Abstract60Sketch";

export const Abstract60SketchMetadata = {
  id: "abstract60_sketch",
  baseId: "abstract60",
  variant: "sketch",
  name: "Abstract60",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract60Sketch;
