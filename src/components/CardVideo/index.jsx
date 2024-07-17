import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { VideosContext } from '../../context/VideosContext';

const StyledCardVideo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 432px;
    background-color: #000000;
    border-radius: 10px;
    box-shadow: 0px 0px 12px 1px #2271D1;
    margin: 10px;

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #000000;

        button {
            border: none;
            background-color:   transparent;
            cursor: pointer;
            color: #2271D1;
            padding: 10px;
        }
    }
`;


const CardVideo = ({ video }) => {

    const { setVideoModalEdit, setOpenModal } = useContext(VideosContext);

    const onDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/videos/${id}`, {
            method: 'DELETE',
            });
    
            if (!response.ok) {
            throw new Error(`Falha ao excluir vídeo: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Vídeo excluído com sucesso:', data);
        } catch (error) {
            console.error('Erro ao excluir vídeo:', error);
        }
    };

    const onEdit = () => {
        setOpenModal(true);
        setVideoModalEdit(video);
    };

    return (
        <StyledCardVideo>
            <iframe width="430" height="260" src={video.url} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div>
                <button onClick={() => onDelete(video.id)}>Delete</button>
                <button onClick={onEdit}>Edit</button>
            </div>
        </StyledCardVideo>
    );
};

CardVideo.propTypes = {
    video: PropTypes.object.isRequired,
};

export default CardVideo;