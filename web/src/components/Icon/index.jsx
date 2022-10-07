import { ReactComponent as ArrowLeft } from "./Svgs/arrow-left.svg";
import { ReactComponent as ArrowRight } from "./Svgs/arrow-right.svg";
import { ReactComponent as Back } from "./Svgs/back.svg";
import { ReactComponent as Profile } from "./Svgs/profile.svg";

const icons = {
  ArrowLeft,
  ArrowRight,
  Back,
  Profile,
};

export function Icon({ name, ...props }) {
  const Element = icons[name];
  return <Element {...props} />;
}
