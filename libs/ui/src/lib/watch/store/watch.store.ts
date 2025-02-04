import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

type WatchState = {
  selectedVideo: string;
  platform: string;
};

const initialState: WatchState = {
  selectedVideo: 'https://www.youtube.com/embed/OpbLrxw5ul0?si=GaMOvkKyxkRY1Xsl',
  platform: 'yt'
};

export const WatchStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => {
      return {
        setVideo(url: string, platform: string): void {
            patchState(store, {selectedVideo: url, platform: platform});
        }
      };
    })
);