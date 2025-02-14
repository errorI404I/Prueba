"use client";

import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            // Lógica para obtener posts del backend
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog; 