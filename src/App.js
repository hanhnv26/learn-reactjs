// import './App.css';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import queryString from 'query-string';

import PostList from './features/PostList';
import TodoFeature from './features/Todo';

function App() {

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl =
          `http://js-post-api.herokuapp.com/api/posts?${paramString}`;

        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        // console.log(1);
        setPostList(data);
        // console.log(2);
        // console.log(data, pagination);
        setPagination(pagination);
        // console.log(3);
      }
      catch (err) {
        console.log('Failed to fetch post list', err.message);
      }
    }

    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    const newFilters = { ...filters };
    newFilters._page = newPage;
    setFilters(newFilters);
    console.log(filters);
  }
  console.log(pagination);

  return (
    <div className="App">
      {/* <TodoFeature /> */}

      {/* <AlbumFeature /> */}

      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
