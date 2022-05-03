export type EntryState = 'default' | 'error' | 'loading' | 'success';

export type EntryProps = {
  plate: string;
  setPlate: (newPlate: string) => void;
};
