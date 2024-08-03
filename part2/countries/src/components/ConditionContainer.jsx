export default function ConditionContainer({
  children,
  isActive,
  alternative,
}) {
  if (isActive) {
    return alternative;
  }
  return children;
}
