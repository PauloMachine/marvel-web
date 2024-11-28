import characterData from "../fixtures/character.json";
import { searchCharacter, validateCharacter } from "../support/commands";

describe("Navbar Search", () => {
  it("Searches for A-Bomb (HAS) and validates character details", () => {
    cy.visit("/");
    searchCharacter(characterData.name);
    cy.contains(characterData.name).click();
    validateCharacter(characterData);
  });
});
