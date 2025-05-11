import React, { useEffect } from 'react';
import { SearchAppBar } from '../../components/NavBar';
import '../dashboardPage.css';
import { HomeWorkDetails } from '../../components/HomeWorkDetails';
import { usePost } from '../../shared/hooks/usePost';
import { useParams } from 'react-router-dom';

export const PostDetails = () => {
    const { post, loading, postDataById, comment } = usePost();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            postDataById(id);
        }
    }, [id]);

    return (
        <div className="dashboard-container">
            <div className='dashboard-background'/>
            <SearchAppBar />
            <div className='dashboard-content'>
                {loading ? (
                    <p>Loading...</p>
                ) : post ? (
                    <HomeWorkDetails
                        title={post.title}
                        description={post.description}
                        category={post.category}
                        course={post.course}
                        image={post.img}
                        comments={post.comments}
                        onComment={comment}
                    />
                ) : (
                    <p>No se encontró el post.</p>
                )}
            </div>
           
        </div>
    );
}