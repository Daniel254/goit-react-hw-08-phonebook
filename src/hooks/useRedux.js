import { createSelectorHook, useDispatch } from 'react-redux';

export function useRedux() {
  const dispatch = useDispatch();
  const useSelector = createSelectorHook();
  // const selector = useSelector();
  return { dispatch, useSelector };
}
