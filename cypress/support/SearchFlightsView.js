export default class SearchFlightsView {
  clikOnSortByPriceButton() {
    const sortByPriceButton = cy.get('[data-test="SortBy-price"]');
    sortByPriceButton.contains("Najlacnejšie").click();
    return this;
  }
  firstResultCardContainsDestination(destination) {
    const firstResultCard = cy.get('[data-test="ResultCardWrapper"]');
    firstResultCard.should("be.visible").first().contains(destination);
    return this;
  }
  countOfPassengers(twoPassengers) {
    const passengers = cy.get('[data-test="PassengersField-note-2"]');
    passengers.contains(twoPassengers);
    return this;
  }
  destinationFieldContainsDestination(destination) {
    const destinationField = cy.get(
      '[data-test="SearchPlaceField-destination"]'
    );
    destinationField.contains(destination);
    return this;
  }
  clickOnBookingButton() {
    const bookingButton = cy.get('[data-test="BookingButton"]');
    bookingButton.first().contains("Rezervovať").click({ force: true });
    return this;
  }
  visibleMagicLoginModal() {
    const magicModal = cy.get('[data-test="MagicLogin-RequiredLogin"]');
    magicModal.should("be.visible");
    return this;
  }
  clickOnContinueWithoutLoginButton() {
    const continueWithoutLogin = cy.get(
      '[data-test="MagicLogin-GuestTextLink"]'
    );
    continueWithoutLogin.click();
    return this;
  }
  reservationHeadContainsDestination(destination) {
    const reservationHead = cy.get('[data-test="ReservationHead"]');
    reservationHead
      .should("be.visible", { timeout: 5000 })
      .should("contain.text", destination, { timeout: 5000 });
    return this;
  }
}
