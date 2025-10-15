import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Antarctica: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Antarctica(
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
      viewBox="0 0 32 32"
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#0a9fdc"
      />
      <path
        d="M24.2729 17.0616C23.3556 16.1744 24.9795 15.0793 22.6805 14.6465C23.19 13.6262 22.8098 11.1413 21.7884 10.9655C21.3451 10.8266 20.6089 10.2275 20.1801 10.7263C20.0478 10.1114 19.8125 10.0697 19.3962 9.79173C18.785 10.1719 18.1358 9.60713 17.729 9.23403C17.1833 9.02923 15.8904 9.41943 15.6197 8.75073C15.3544 9.34743 15.1941 9.27643 14.703 9.14813C14.6169 9.49983 14.1421 10.0147 13.5677 10.2875C13.5885 11.3002 12.9975 12.3882 12.7557 13.1499C10.8083 14.1235 9.14189 12.5892 7.70709 11.4349C7.59269 13.0285 8.99699 13.2319 8.62209 14.2548C8.84019 14.7499 9.23189 14.1743 9.40689 14.6455C9.30629 15.2672 10.1552 14.8765 9.71269 15.4454C9.19079 15.8484 9.72159 16.9963 9.08639 16.8481C8.75949 17.3465 9.86539 18.0414 9.74709 17.4657C10.2323 18.7093 10.3081 18.0302 10.4352 18.7602C10.5099 18.8328 10.418 19.0708 10.4369 19.4733C10.8986 19.3542 10.6782 19.6929 10.8019 19.9C11.5133 19.6582 12.3649 20.7976 12.8196 20.4735C14.2089 20.6791 17.4784 19.9171 17.0921 21.701C15.8385 23.0533 17.4705 23.0545 18.7129 23.1119C19.1276 23.314 19.3445 23.0181 19.7223 22.7715C19.9468 23.1189 20.265 23.083 20.6089 22.7503C20.9361 22.8742 21.3834 22.0592 21.7848 22.3963C21.7126 22.1673 21.6522 21.9473 22.1211 21.7794C21.7936 21.3297 22.5421 21.0388 22.8473 20.7567C22.5983 20.0866 22.9794 19.9894 23.517 19.7346C23.2161 18.6169 24.3388 18.1675 24.2729 17.0616Z"
        fill="#fff"
      />
    </svg>
  );
});

Antarctica.displayName = "Antarctica";

Antarctica.metadata = {
  name: "Antarctica",
  category: "symbols/flags",
  tags: ["antarctica", "icon"],
  description: "Antarctica icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Antarctica;
