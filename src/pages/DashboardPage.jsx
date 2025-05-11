import React from 'react';
import {SearchAppBar} from '../components/NavBar';
import './dashboardPage.css';
import { usePost } from '../shared/hooks/usePost';
import {MediaCard} from '../components/HomeWorkCard';
import { useState } from 'react';

export const DashboardPage = () => {
  const { posts, loading } = usePost();
  const [search, setSearch] = useState('');

  const filteredPosts = posts
    ? posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="dashboard-container">
        <SearchAppBar onSearch={setSearch} />
 
          <div className='dashboard-content'>
            <div className='dashboard-cards'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    filteredPosts.map((post) => (
                        <MediaCard
                            key={post.pid}
                            id={post.pid}
                            image={post.img}
                            title={post.title}
                            category={post.category}
                            course={post.course}
                        />
                    ))
                )}
            </div>
          </div>
    </div>
  );
}