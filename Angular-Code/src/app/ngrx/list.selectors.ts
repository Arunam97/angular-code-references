import { createSelector } from '@ngrx/store';

export const selectList = (state: {listReducerImport: string[]}) => state.listReducerImport;

// Selector to get the total number of words in the list
export const selectTotalWords = createSelector(
  selectList,
  (list) => {
    return list
      .map(item => item.trim().split(/\s+/).length) // Split each item into words and count
      .reduce((total, current) => total + current, 0); // Sum up all word counts
  }
);

// Selector to get the total number of letters in the list
export const selectTotalLetters = createSelector(
  selectList,
  (list) => {
    return list
      .map(item => item.replace(/\s+/g, '').length) // Remove all whitespace and count letters
      .reduce((total, current) => total + current, 0); // Sum up all letter counts
  }
);
