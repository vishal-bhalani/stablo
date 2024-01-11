import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        // "container px-8 mx-auto xl:px-5",
        "container mx-auto px-8",
        "max-w-1xl",
        "py-5 lg:py-8",
        "flex items-center justify-center",
        // props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        // !props.alt && "py-5 lg:py-8",
        props.className
      )}>
      {props.children}
    </div>
  );
}
