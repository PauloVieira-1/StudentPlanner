import { createContext } from "react";

export const ModalContext = createContext({
  show: false,
});

export const subjectModalContext = createContext({
  show: false,
});

export const applicationModalContext = createContext({
  show: false,
});

export const assignmentModelContext = createContext({
  assignmentShow: false,
  tasktShow: false,
});

export const reminderModelContext = createContext({
  reminderShow: false,
});
