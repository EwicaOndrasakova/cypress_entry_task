import SearchFlights from "../support/SearchFlights.js";
import FlightsList from "../support/FlightsList.js";

const searchFlights = new SearchFlights();
const flightsList = new FlightsList();
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
      searchFlights.destinationInput().click().type(destination);
      searchFlights
        .destinationPlacePicker()
        .contains(mainDestination)
        .click({ timeout: 15000 });

      searchFlights.addPassengerAndBagsButton().click();
      searchFlights.addOnePassengerButton().find(button).eq("1").click();
      searchFlights
        .bookingCheckbox()
        .uncheck({ force: true })
        .should("not.be.checked");
      searchFlights.searchFlightsButton().click();

      flightsList.sortByPriceButton().contains("Najlacnejšie").click();
      flightsList.destinationFieldContainsDestination(destination);
      flightsList.countOfPassengers().contains(twoPassengers);
      flightsList
        .firstResultCardContains()
        .should("be.visible")
        .first()
        .contains(destination);
      flightsList
        .bookingButton()
        .first()
        .contains("Rezervovať")
        .click({ force: true });
      flightsList.visibleMagicLoginModal().should("be.visible");
      flightsList.continueWithoutLoginButton().click();
      flightsList
        .reservationHead()
        .should("be.visible", { timeout: 5000 })
        .should("contain.text", destination, { timeout: 5000 });
    });
  });
});
