export default class SearchFlights {
  clickOnDestinationInput(destination) {
    const destinationInput = cy.get(
      '[data-test="SearchPlaceField-destination"]'
    );
    destinationInput.find('[data-test="SearchField-input"]', { timeout: 5000 });
    destinationInput.should("be.visible").type(destination);
    return this;
  }
  selectDestinationsList(mainDestination) {
    const destinationDublin = cy.get('[data-test="PlacePickerRow-wrapper"]');
    destinationDublin.contains(mainDestination);
    destinationDublin.click({ timeout: 5000 });
    return this;
  }
  clickOnAddPassengerAndBagsButton() {
    const addPassengerAndBagsButton = cy.get('[data-test="PassengersField"]');
    addPassengerAndBagsButton.click();
    return this;
  }
  addOnePassenger(button) {
    const onePassenger = cy.get('[data-test="PassengersRow-adults"]');
    onePassenger.find(button).eq("1").click();
    return this;
  }
  uncheckBookingCheckbox() {
    const bookingCheckbox = cy.get('[type="checkbox"]');
    bookingCheckbox.uncheck({ force: true }).should("not.be.checked");
    return this;
  }
  clickOnSearchButton() {
    const searchButton = cy.get('[data-test="LandingSearchButton"]');
    searchButton.click();
    return this;
  }
}
