export default function nodeColor(node) {
  switch (node.type) {
    case "title":
      return "#ff0072";
    case "branch":
      return "#6ede87";
    default:
      return "#6865A5";
  }
}
