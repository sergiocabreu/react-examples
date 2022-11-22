import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Formulario from "./Formulario";

test("quando o input estiver vazio, novos participantes não podem ser adicoinados", () => {
  render(<Formulario></Formulario>);

  const input = screen.getByPlaceholderText("Insira os nomes do participantes");
  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test("adicionar um participante caso exista um nome preenchido", () => {
  render(<Formulario></Formulario>);

  const input = screen.getByPlaceholderText("Insira os nomes do participantes");
  const button = screen.getByRole("button");

  fireEvent.change(input, { target: { value: "" } });
  fireEvent.click(button);

  expect(input).toHaveFocus();
  expect(input).toHaveValue("");
});
