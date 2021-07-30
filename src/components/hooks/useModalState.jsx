import { useState } from "react";

export default function useModalState(defaultState = false) {
  const [modalState, setModalState] = useState(defaultState);
  const toggleModalState = () => setModalState((prev) => !prev);

  return [modalState, toggleModalState, setModalState];
}
