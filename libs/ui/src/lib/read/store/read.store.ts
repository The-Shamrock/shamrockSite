import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

type ReadState = {
  selectedIssue: string;
};

const initialState: ReadState = {
  selectedIssue: "latest"
};

export const ReadStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => {
      return {
        setIssue(issue: string): void {
            patchState(store, {selectedIssue: issue});
        }
      };
    })
);