import SearchFlights from "../support/SearchFlights.js";
import SearchFlightsView from "../support/SearchFlightsView.js";
import "cypress-wait-until";

const searchFlights = new SearchFlights();
const searchFlightsView = new SearchFlightsView();
const mainDestination = "Dublin, Írsko";
const destination = "Dublin";
const button = '[type="button"]';
const twoPassengers = "2";

describe("Test for Kiwi Cypress weekend", () => {
  beforeEach("Kiwi - main", () => {
    cy.setCookie("__kwc_agreed", "true");
    window.localStorage.setItem("bookingcom_extension_default", "false");
    cy.visit("https://www.kiwi.com/sk");
  });

  Cypress._.times(10, () => {
    it("The flight to Dublin is found", () => {
      searchFlights
        .clickOnDestinationInput(destination)
        .selectDestinationsList(mainDestination)
        .clickOnAddPassengerAndBagsButton()
        .addOnePassenger(button)
        .uncheckBookingCheckbox()
        .clickOnSearchButton();

      searchFlightsView
        .clikOnSortByPriceButton()
        .destinationFieldContainsDestination(destination)
        .countOfPassengers(twoPassengers)
        .firstResultCardContainsDestination(destination)
        .clickOnBookingButton()
        .visibleMagicLoginModal()
        .clickOnContinueWithoutLoginButton()
        .reservationHeadContainsDestination(destination);
    });
  });
});
