
'use client';
import React from 'react';

export interface Abstract26SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract26Sketch = React.forwardRef<SVGSVGElement, Abstract26SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M235.982 104.784C231.414 107.569 137.725 317.117 173.596 339.064C193.537 351.206 239.436 312.327 243.112 280.132C243.669 274.784 244.337 273.559 248.904 269.548C253.138 265.761 268.511 250.276 279.094 239.135C283.216 234.902 278.316 230.892 269.181 231.003C264.056 231.003 264.613 230.446 252.025 245.708C246.009 252.949 240.995 258.742 240.66 258.742C240.438 258.742 238.321 257.517 236.093 255.957C225.176 248.493 214.815 253.841 206.794 270.997C200.444 284.588 207.909 291.606 223.06 286.37L227.738 284.699L224.841 290.381C209.691 320.348 183.512 334.496 185.183 333.159C183.512 334.05 181.506 333.271 180.837 331.6C172.037 311.213 194.428 220.197 229.632 133.192C234.311 121.717 238.322 111.691 238.656 110.911C238.991 110.131 240.103 109.463 241.217 109.463C245.562 109.463 240.326 101.999 235.982 104.784ZM232.751 267.432C232.751 272.89 225.844 277.681 221.833 277.124C218.046 276.678 216.709 271.554 223.17 265.426C227.515 261.305 232.751 261.639 232.751 267.432Z" />
    </svg>
  )
);

Abstract26Sketch.displayName = "Abstract26Sketch";

export const Abstract26SketchMetadata = {
  id: "abstract26_sketch",
  baseId: "abstract26",
  variant: "sketch",
  name: "Abstract26",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract26Sketch;
