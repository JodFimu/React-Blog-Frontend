import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import {getPost as postReq, getByCourse as courseReq} from '../../services/api';

export const usePost = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const postData = async () => {
        setLoading(true);
        
        try {
            const response = await postReq();
            setPosts(response.data.posts);
            setLoading(false); 
        } catch (error) {
            toast.error("Error al cargar los posts " + error.message);
        }
        
    };
    const postDataByCourse = async (course) => {
        setLoading(true);
        
        try {
            const response = await courseReq(course);
            setPosts(response.data.posts);
            setLoading(false); 
        } catch (error) {
            toast.error("Error al cargar los posts " + error.message);
        }
        
    };
    
    useEffect(() => {
        postData();
    }, []);
    
    
    return { 
        posts,
        loading,
        postDataByCourse
    };
}