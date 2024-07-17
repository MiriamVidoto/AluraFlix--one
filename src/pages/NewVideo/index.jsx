import { useState } from 'react';
import styled from 'styled-components';
import PageDefault from "../PageDefault";
import Button from '../../components/Button';

const StyledRegister = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;

    h1 {
        color: #ffffff;
    }

    p {
        color: #ffffff;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #000000;
        padding: 10px;
        border-radius: 10px;
        color: #ffffff;
        width: 50%;
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

const NewVideo = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const onClean = () => {
        setTitle('');
        setCategory('');
        setImage('');
        setDescription('');
        setUrl('');
    }

    const onSave = async() => {
        const newVideo = {
            titulo: title,
            categoria: category,
            imagem: image,
            descricao: description,
            url: url,
        };

        console.log("salvando", newVideo);

        const response = await fetch("http://localhost:3000/videos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVideo),
        });

        if (response.ok) {
            alert("Vídeo cadastrado com sucesso!");
            onClean();
        }
    }

    return (
        <PageDefault>
            <StyledRegister>
                <h1>Novo Vídeo</h1>
                <p>Complete o formulário para criar um novo card de vídeo.</p>
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
                        <Button onClick={() => onSave()}>Salvar</Button>
                        <Button onClick={onClean}>Limpar</Button>
                    </div>
                </form>
            </StyledRegister>
        </PageDefault>
    );
};

export default NewVideo;