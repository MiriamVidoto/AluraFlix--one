import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const VideosContext = React.createContext();

export const VideosProvider = ({ children }) => {
    
    const [videos, setVideos] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [videoModalEdit, setModalvideoModalEdit] = useState();

    useEffect(() => {
        async function conectApi() {
            const response = await fetch("http://localhost:3000/videos");
            const data = await response.json();
            setVideos(data);
        }
        conectApi();
    }
    , []);
    

    const value= {
        videos,
        videoModalEdit,
        setModalvideoModalEdit,
        openModal,
        setOpenModal
    };

        return (
            <VideosContext.Provider value={value}>
                {children}
            </VideosContext.Provider>
        );
    };

VideosProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
