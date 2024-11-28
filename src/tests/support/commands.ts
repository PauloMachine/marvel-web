export const searchCharacter = (characterName: string) => {
  cy.get('[data-testid="navbar-search-input"]', { timeout: 10000 }).type(
    `${characterName}{enter}`,
  );
};

export const validateCharacter = (character: {
  id: number;
  name: string;
  description: string;
}) => {
  cy.url().should("include", `/characters/${character.id}`);
  cy.get('[data-testid="character-name"]').should("contain", character.name);
  cy.get('[data-testid="character-description"]').should(
    "contain",
    character.description,
  );
};
