export type Section = 'entry' | 'exit';

export type SessionStore = {
  plate: string;
  currentSection: Section;
};
