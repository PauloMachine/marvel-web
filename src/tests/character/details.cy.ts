import characterData from "../fixtures/character.json";
import { validateCharacter } from "../support/commands";

describe("Character Details", () => {
  it("Validates the details of A-Bomb (HAS)", () => {
    cy.visit(`/characters/${characterData.id}`);
    validateCharacter(characterData);
  });
});
