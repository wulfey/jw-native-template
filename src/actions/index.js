import { SELECTION } from './types';

export function selectItem(item) {
  return {
    type: SELECTION,
    payload: item.id
  };
}
