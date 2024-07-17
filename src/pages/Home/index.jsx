import { useContext } from 'react';
import PageDefault from "../PageDefault";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import CategoryTitle from "../../components/CategoryTitle";
import CardVideo from '../../components/CardVideo';
import { VideosContext } from '../../context/VideosContext';
import Modal from '../../components/Modal';


const Home = () => {
    const { videos } = useContext(VideosContext);


    return (
        <>
            <PageDefault>
                <Banner />
                <Modal/>
                <section>
                <CategoryTitle title="FRONT END" backgroundColor="#6BD1FF"/>
                <Carousel>
                {videos.filter(video => video.categoria === "frontend").map(video => (
                    <CardVideo key={video.id} video={video} />
                ))}
                </Carousel>
                </section>
                <section>
                <CategoryTitle title="BACK END" backgroundColor="#00C86F"/>
                <Carousel>
                {videos.filter(video => video.categoria === "backend").map(video => (
                    <CardVideo key={video.id} video={video} />
                ))}
                </Carousel>
                </section>
                <section>
                <CategoryTitle title="MOBILE" backgroundColor="#FFBA05"/>
                <Carousel>
                {videos.filter(video => video.categoria === "mobile").map(video => (
                    <CardVideo key={video.id} video={video} />
                ))}
                </Carousel>
                </section>
            </PageDefault>
        </>
    );
};

export default Home;