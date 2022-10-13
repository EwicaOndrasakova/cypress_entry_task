export default class SearchFlights {
  destinationInput() {
    return cy.get(
      '[data-test="PlacePickerInput-destination"] > [data-test="SearchField-input"]'
    );
  }
  destinationPlacePicker() {
    return cy.get('[data-test="PlacePickerRow-wrapper"]');
  }
  addPassengerAndBagsButton() {
    return cy.get('[data-test="PassengersField"]');
  }
  addOnePassengerButton() {
    return cy.get('[data-test="PassengersRow-adults"]');
  }
  bookingCheckbox() {
    return cy.get('[type="checkbox"]');
  }
  searchFlightsButton() {
    return cy.get('[data-test="LandingSearchButton"]');
  }
}
