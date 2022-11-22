import React from "react";
import { render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

test("quando o input estiver vazio, novos participantes não podem ser adicoinados", () => {
  render(<Formulario></Formulario>);

  const input = screen.getByPlaceholderText("Insira os nomes do participantes");
  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});
