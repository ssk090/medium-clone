export function getInitials(name: string) {
  const nameParts = name.trim().split(" ");
  let initials = "";

  if (nameParts.length > 0) {
    initials += nameParts[0].charAt(0);
  }

  if (nameParts.length > 1) {
    initials += nameParts[1].charAt(0);
  }

  return initials;
}
