import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CharacterRow from "../components/character/CharacterRow";

test("character row", async () => {
  render(
    <MemoryRouter>
      <CharacterRow character={{ id: "1", name: "Rick" }} />
    </MemoryRouter>
  );

  const text = screen.getByRole("link", { name: "Rick" });
  expect(text.textContent).toBe("Rick");
  expect(text).toHaveProperty("href", "http://localhost/character/1");
});
