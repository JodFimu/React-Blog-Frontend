import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useParams } from 'react-router-dom';

export const HomeWorkDetails = ({ image, title, category, course, description, comments = [], onComment }) => {
    const [showForm, setShowForm] = useState(false);
    const [inputUser, setInputUser] = useState('');
    const [inputComment, setInputComment] = useState('');
    const { id } = useParams();

    const handleShowForm = () => setShowForm(true);

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (inputUser && inputComment) {
            await onComment(id, { user: inputUser, comment: inputComment });
            setInputUser('');
            setInputComment('');
            setShowForm(false);
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 1100,
                margin: '32px auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                px: 2,
            }}
        >
            <Card
                sx={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: 1100,
                    minHeight: 320,
                    boxShadow: 6,
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                <CardContent
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: 4,
                    }}
                >
                    <Typography variant="h4" sx={{ color: '#000', mb: 2 }}>{title}</Typography>
                    <Typography variant="h6" sx={{ color: '#555', mb: 2 }}>{category} - {course}</Typography>
                    <Box mt={2}>
                        <Typography variant="body1" sx={{ color: '#222', fontSize: 18 }}>{description}</Typography>
                    </Box>
                </CardContent>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                        width: { xs: '0%', md: '50%' },
                        height: '100%',
                        objectFit: 'cover',
                        display: { xs: 'none', md: 'block' }
                    }}
                />
            </Card>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1100,
                    mt: 2,
                    p: 2,
                    bgcolor: '#f5f5f5',
                    borderRadius: 2,
                    boxSizing: 'border-box',
                }}
            >
                <Typography variant="h5" sx={{ mb: 2, color: "#000" }}>Comentarios</Typography>
                {!showForm ? (
                    <Button variant="contained" onClick={handleShowForm} sx={{ mb: 2 }}>
                        Agregar
                    </Button>
                ) : (
                    <form onSubmit={handleAddComment} style={{ display: 'flex', gap: 8, marginBottom: 16, flexDirection: 'column' }}>
                        <TextField
                            label="Usuario"
                            variant="outlined"
                            size="small"
                            value={inputUser}
                            onChange={e => setInputUser(e.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Comentario"
                            variant="outlined"
                            size="small"
                            value={inputComment}
                            onChange={e => setInputComment(e.target.value)}
                            fullWidth
                            required
                        />
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button type="submit" variant="contained">Enviar</Button>
                            <Button variant="outlined" onClick={() => setShowForm(false)}>Cancelar</Button>
                        </Box>
                    </form>
                )}
                <List>
                    {comments.map((comment, idx) => (
                        <ListItem key={comment._id || idx} disablePadding>
                            <ListItemText
                                sx={{ borderRadius: 1, p: 1, color: "#000" }}
                                primary={comment.comment}
                                secondary={`${comment.user} - ${new Date(comment.date).toLocaleString()}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};