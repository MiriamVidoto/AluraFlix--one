import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import PropTypes from 'prop-types';
import { VideosContext } from '../../context/VideosContext';

const StyledModal = styled.div`
        display: ${props => props.open ? 'flex' : 'none'};
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 10;

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: #000000;
            padding: 20px;
            border-radius: 10px;
            color: #ffffff;
        }

        label {
            display: flex;
            flex-direction: column;
            gap: 5px;

            input {
                padding: 5px;
            }

        }

        div{
            display: flex;
            justify-content: space-between;
            gap: 20px;
        }


`;


const Modal = () => {
    const { videoModalEdit, openModal } = useContext(VideosContext);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        setTitle(videoModalEdit? videoModalEdit.titulo : '');
        setCategory(videoModalEdit? videoModalEdit.categoria : '');
        setImage(videoModalEdit? videoModalEdit.imagem : '');
        setDescription(videoModalEdit? videoModalEdit.descricao : '');
        setUrl(videoModalEdit? videoModalEdit.url : '');
    }, [videoModalEdit]);

    const onClean = () => {
        setTitle('');
        setCategory('');
        setImage('');
        setDescription('');
        setUrl('');
    }

    const onSave = async () => {
        const newVideo = {
            titulo: title,
            categoria: category,
            imagem: image,
            descricao: description,
            url: url,
        };

        await fetch(`http://localhost:8080/videos/${videoModalEdit.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVideo),
        });

        
    }

    return (
        
        <StyledModal open={openModal}>
            <form>
                <label>
                    Titulo:
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Categoria:
                    <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                </label>
                <label>
                    Imagem:
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <label>
                    Descrição:
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    URL:
                    <input type="text" name="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                </label>
                <div>
                    <Button onClick={() => onSave}>Salvar</Button>
                    <Button onClick={onClean}>Limpar</Button>
                </div>
            </form>
        </StyledModal>
    );
};

Modal.propTypes = {
    video: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
};


export default Modal;

