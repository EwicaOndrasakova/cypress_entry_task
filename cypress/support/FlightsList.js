export default class FlightsList {
  sortByPriceButton() {
    return cy.get('[data-test="SortBy-price"]');
  }
  destinationFieldContainsDestination() {
    return cy.get('[data-test="SearchPlaceField-destination"]');
  }
  countOfPassengers() {
    return cy.get('[data-test="PassengersField-note-2"]');
  }
  firstResultCardContains() {
    return cy.get('[data-test="ResultCardWrapper"]');
  }
  bookingButton() {
    return cy.get('[data-test="BookingButton"]');
  }
  visibleMagicLoginModal() {
    return cy.get('[data-test="MagicLogin-RequiredLogin"]');
  }
  continueWithoutLoginButton() {
    return cy.get('[data-test="MagicLogin-GuestTextLink"]');
  }
  reservationHead() {
    return cy.get('[data-test="ReservationHead"]');
  }
}
