import { TEXT_FILTER } from '../constants/action_types';

export const text_filter = (newText = '') => ({
    type: TEXT_FILTER,
    newText
});
