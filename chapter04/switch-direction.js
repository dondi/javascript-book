switch (direction.toLowerCase()) {
    case "north": row -= 1; break;
    case "south": row += 1; break;
    case "east": column += 1; break;
    case "west": column -= 1; break;
    default: alert("Illegal direction");
}
