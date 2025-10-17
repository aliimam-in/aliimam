import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Fastify: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Fastify(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeDasharray={strokeDasharray}
      opacity={opacity}
      {...props}
      ref={forwardedRef}
    >
      <g clipPath="url(#undefined-clip0_2066_391)">
        <path
          d="M23.2446 6.22689L24 4.23344L23.9672 4.10994L16.4937 6.11609C17.2906 4.9418 17.0168 4 17.0168 4C17.0168 4 14.6302 5.55282 12.8254 5.51223C11.0206 5.47154 10.4388 4.98077 7.67128 5.88026C4.90378 6.77907 4.12191 9.53809 3.3195 10.1308C2.51709 10.7235 0 12.6542 0 12.6542L0.0054375 12.6884L2.27484 11.9523C2.27484 11.9523 1.65234 12.5497 0.33 14.3655L0.268219 14.3074L0.270562 14.3202C0.270562 14.3202 1.33331 15.9749 2.37647 15.669C2.48128 15.6379 2.59931 15.5869 2.72831 15.52C3.14831 15.7583 3.69647 15.9925 4.30172 16.057C4.30172 16.057 3.89203 15.5717 3.55022 15.0196C3.64247 14.9591 3.73716 14.8961 3.83334 14.8324L3.78872 14.8643L4.65281 15.1877L4.55747 14.36C4.56056 14.3584 4.56291 14.356 4.566 14.3544L5.41528 14.6722L5.30972 13.9194C5.41576 13.8628 5.52317 13.8088 5.63184 13.7577L6.51713 10.3461L10.1776 7.80206L9.88669 8.54786C9.14456 10.4074 7.75106 10.8464 7.75106 10.8464L7.16925 11.071C6.73688 11.5921 6.55463 11.7204 6.40613 13.4692C6.75488 13.38 7.08797 13.3584 7.38975 13.4413C8.95378 13.8708 9.49566 15.7909 9.07416 16.3223C8.96859 16.4554 8.71762 16.6824 8.40094 16.9494H7.76597L7.75734 17.4736C7.73541 17.4911 7.71356 17.5079 7.69238 17.5253H7.04644L7.03866 18.0368C6.98156 18.0815 6.92447 18.1245 6.86981 18.1667C6.26297 18.1794 5.49422 17.6401 5.49422 17.6401C5.49422 18.1309 5.89547 18.8862 5.89547 18.8862C5.89547 18.8862 5.922 18.8735 5.96653 18.8511C5.92744 18.8806 5.90559 18.8966 5.90559 18.8966C5.90559 18.8966 7.52972 20 8.55262 19.5913C9.462 19.2279 11.8166 17.3365 13.849 16.441L19.9993 14.7902L20.8102 12.6494L16.123 13.9073V11.985L21.6228 10.5085L22.4337 8.36772L16.1246 10.0616V8.13819L23.2446 6.22689Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_391">
          <path fill="#fff" transform="translate(0 4)" d="M0 0H24V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Fastify.displayName = "Fastify";

Fastify.metadata = {
  name: "Fastify",
  category: "icon/framework",
  tags: ["fastify", "icon"],
  description: "Fastify icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Fastify;
