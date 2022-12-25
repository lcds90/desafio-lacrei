import { Link as StyledLink } from "styles/shared";
import { useRouter } from "next/router";

interface Props {
  id: string;
  href: string;
  children?: React.ReactNode;
  bold?: boolean;
  primary?: boolean;
  isActive?: boolean;
  isBlank?: boolean;
}

export const Link = ({
  href,
  id,
  bold,
  children,
  primary = false,
  isActive = false,
  isBlank = false,
}: Props) => {
  const router = useRouter();

  return (
    <StyledLink
      active={isActive || router.pathname === href}
      primary={primary}
      bold={bold}
      id={id}
      href={href}
      rel={isBlank ? "noopener noreferrer" : ""}
      target={isBlank ? "_blank" : ""}
    >
      {children}
    </StyledLink>
  );
};
