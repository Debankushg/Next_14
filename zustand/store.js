import {create} from 'zustand';
import debounce from 'lodash.debounce';

const postDataStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: debounce(async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      set({ data: result, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }, 1000), // Adjust the debounce delay as needed

  deletePost: (id) => set((state) => ({
    data: state.data.filter((post) => post.id !== id)
  })),
}));

export default postDataStore;
