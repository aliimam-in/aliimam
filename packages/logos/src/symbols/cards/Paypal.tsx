import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PaypalProps extends IconProps {
  type?: "symbols" | "icon";
}

export const Paypal: IconComponent<PaypalProps> = React.forwardRef<
  SVGSVGElement,
  PaypalProps
>(function Paypal(
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
    type = "icon",
    ...props
  },
  forwardedRef,
) {
  if (type === "symbols") {
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
        <path
          d="M20.25 5.25H3.75C2.50736 5.25 1.5 6.25736 1.5 7.5V16.5C1.5 17.7426 2.50736 18.75 3.75 18.75H20.25C21.4926 18.75 22.5 17.7426 22.5 16.5V7.5C22.5 6.25736 21.4926 5.25 20.25 5.25Z"
          fill="#fff"
        />
        <path
          d="M11.2043 9.30005C11.0768 9.30005 10.968 9.39305 10.9478 9.51905L10.5218 12.219C10.5413 12.093 10.65 12 10.7783 12H12.0255C13.281 12 14.346 11.0843 14.541 9.84305C14.5553 9.75005 14.5635 9.65705 14.5658 9.5633C14.247 9.39605 13.872 9.30005 13.461 9.30005H11.2035H11.2043Z"
          fill="#001c64"
        />
        <path
          d="M14.5665 9.56325C14.565 9.657 14.5568 9.75075 14.5418 9.843C14.3468 11.0842 13.2818 12 12.0263 12H10.779C10.6515 12 10.5428 12.093 10.5225 12.219L10.131 14.7L9.88576 16.2562C9.86776 16.371 9.94576 16.479 10.0605 16.497C10.0718 16.4985 10.0823 16.4993 10.0935 16.4993H11.4473C11.5748 16.4993 11.6835 16.4063 11.7038 16.2803L12.0608 14.0182C12.081 13.8923 12.1898 13.7993 12.3173 13.7993H13.1145C14.37 13.7993 15.435 12.8835 15.63 11.6422C15.768 10.761 15.3248 9.96 14.5665 9.5625V9.56325Z"
          fill="#0070e0"
        />
        <path
          d="M9.666 7.5C9.5385 7.5 9.42975 7.593 9.4095 7.719L8.34675 14.4562C8.3265 14.5845 8.4255 14.7 8.55525 14.7H10.131L10.5225 12.219L10.9485 9.519C10.9688 9.393 11.0768 9.3 11.205 9.3H13.4625C13.8735 9.3 14.2478 9.396 14.5673 9.56325C14.589 8.433 13.6568 7.5 12.375 7.5H9.6675H9.666Z"
          fill="#003087"
        />
      </svg>
    );
  }

  if (type === "icon") {
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
        <g clipPath="url(#undefined-clip0_2066_1221)">
          <path
            d="M19.0587 5.52C19.0587 8.4928 16.3043 12 12.1368 12H8.12247L7.92542 13.2384L6.98889 19.2H2L5.00126 0H13.0841C15.8058 0 17.9471 1.51093 18.7358 3.61067C18.9633 4.22116 19.0729 4.86898 19.0587 5.52Z"
            fill="#002991"
          />
          <path
            d="M21.9341 11.04C21.6679 12.6514 20.8345 14.1159 19.5833 15.1712C18.332 16.2266 16.7445 16.804 15.1049 16.8H12.3173L11.1569 24H6.19479L6.98888 19.2L7.92594 13.2384L8.12245 12H12.1368C16.299 12 19.0587 8.49282 19.0587 5.52002C21.1069 6.57282 22.3009 8.70029 21.9341 11.04Z"
            fill="#60cdff"
          />
          <path
            d="M19.0587 5.52005C18.1999 5.07258 17.1584 4.80005 16.0248 4.80005H9.25657L8.12247 12H12.1368C16.299 12 19.0587 8.49285 19.0587 5.52005Z"
            fill="#008cff"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_1221">
            <path fill="#fff" transform="translate(2)" d="M0 0H20V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`Paypal doesn't support ${type}`);
  return null;
});

Paypal.displayName = "Paypal";

Paypal.metadata = {
  name: "Paypal",
  category: "symbols/cards",
  tags: ["paypal", "icon"],
  description: "Paypal icon from symbols/cards category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Paypal;
