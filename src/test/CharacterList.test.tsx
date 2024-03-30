import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider, MockedResponse, wait } from "@apollo/client/testing";

import { CHARACTERS_QUERY } from "../shared/queries";
import CharacterList from "../components/character/CharacterList";

const mocks: MockedResponse[] = [
  {
    request: {
      query: CHARACTERS_QUERY,
      variables: { page: 1 },
    },
    result: {
      data: {
        characters: {
          info: { pages: 1, count: 100, next: 1, prev: null },
          results: [
            {
              id: "1",
              name: "Rick Sanchez",
              status: "Alive",
              species: "Human",
              type: "",
              gender: "Male",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              origin: {
                id: "1",
                name: "Earth (C-137)",
              },
              location: {
                id: "3",
                name: "Citadel of Ricks",
              },
              created: "2017-11-04T18:48:46.250Z",
            },
            {
              id: "2",
              name: "Morty Smith",
              status: "Alive",
              species: "Human",
              type: "",
              gender: "Male",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              origin: {
                id: null,
                name: "unknown",
              },
              location: {
                id: "3",
                name: "Citadel of Ricks",
              },
              created: "2017-11-04T18:50:21.651Z",
            },
          ],
        },
      },
    },
    delay: 100,
  },
];

test("character list loading", async () => {
  render(
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <CharacterList />
      </MockedProvider>
    </MemoryRouter>
  );

  const loading = screen.getByText("loading...");
  expect(loading.textContent).toBe("loading...");
});

test("character list data", async () => {
  render(
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <CharacterList />
      </MockedProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    const char1 = screen.getByText("Rick Sanchez");
    expect(char1.textContent).toBe("Rick Sanchez");
  });

  await waitFor(() => {
    const char2 = screen.getByText("Morty Smith");
    expect(char2.textContent).toBe("Morty Smith");
  });
});
