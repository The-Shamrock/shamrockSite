import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

type PlayState = {
  selectedPuzzle: string;
};

const initialState: PlayState = {
  selectedPuzzle: 'crossword-dec-2024'
};

export const PlayStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => {
      return {
        setPuzzle(puzzle: string): void {
            patchState(store, {selectedPuzzle: puzzle});
        }
      };
    })
);
