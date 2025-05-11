import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import {getPost as postReq, getByCourse as courseReq, getById, commentPost} from '../../services/api';

export const usePost = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    
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

    const postDataById = async (id) => {
        setLoading(true);
        try {
            const response = await getById(id);
            setPost(response.data.post);
            setLoading(false); 
        } catch (error) {
            toast.error("Error al cargar los posts " + error.message);
        }
        
    };

    const comment = async (id, comment) => {
        setLoading(true);
        try {
            const response = await commentPost(id, comment);
            setPost(response.data.post);
            setLoading(false); 
        } catch (error) {
            toast.error("Error al agregar el comentario " + error.message);
        }
        
    };
    
    useEffect(() => {
        postData();
    }, []);
    
    
    return { 
        posts,
        loading,
        postDataByCourse,
        postDataById,
        post,
        comment
    };
}