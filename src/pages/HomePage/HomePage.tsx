import {Header,CategoryCardContainer,Title,HomeProductsList} from '../../components/index'

export const HomePage = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 100);
  // }, []);

  return (
    <>
      <Header />
      <CategoryCardContainer />
      <Title title="Algunos de nuestros productos" />
      <HomeProductsList />
    </>
  );
};
