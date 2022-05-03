export type ExitState =
  | 'default'
  | 'error'
  | 'payment'
  | 'exit'
  | 'loading'
  | 'success';

export type ExitProps = {
  plate: string;
  setPlate: (newPlate: string) => void;
};
