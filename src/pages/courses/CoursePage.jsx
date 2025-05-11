import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {SearchAppBar} from '../../components/NavBar';
import '../dashboardPage.css';
import { usePost } from '../../shared/hooks/usePost';
import {MediaCard} from '../../components/HomeWorkCard';

export const CoursePage = () => {
    const { posts, loading, postDataByCourse } = usePost();
    let { course } = useParams();

    course = decodeURIComponent(course);

    useEffect(() => {
        if (course) {
            postDataByCourse(course);
        }
    }, [course]);


    return (
        <div className="dashboard-container">
            <div className='dashboard-background'/>
            <SearchAppBar />
    
            <div className='dashboard-content'>
                <div className='dashboard-cards'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        posts && posts.map((post) => (
                            <MediaCard
                                key={post.pid}
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