export function getProductEmoji(name: string): string {
  const emojiMap: Record<string, string> = {
    Bread: "🍞",
    Milk: "🥛",
    Cheese: "🧀",
    Soup: "🍲",
    Butter: "🧈",
  };
  return emojiMap[name] || "🛒";
}
