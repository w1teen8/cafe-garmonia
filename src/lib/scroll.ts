export function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function scrollToReservation() {
  scrollToId("#reservation");
}
