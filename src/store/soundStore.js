import { writable } from 'svelte/store';

export const list = writable([]);
export const selectedSound = writable({});
// export const selectedSound = writable(JSON.parse(localStorage.getItem('selectedSound')) || {});
export const isRun = writable(false);
export const isMuted = writable(false);
export const isRepeat = writable(JSON.parse(localStorage.getItem('globalRepeat')) || {});
export const globalVolume = writable(JSON.parse(localStorage.getItem('globalVolume')) || {});
export const sound = writable(null);
export const soundId = writable(null);
