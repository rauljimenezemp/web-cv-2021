import NavigationBar from './NavigationBar';
import Carousel from '../inicio/Carousel';
import Portada from '../inicio/Portada';
import Impacto from '../inicio/Impacto';
import Cardsexp from '../inicio/Cardsexp';
import Cardsfor from '../inicio/Cardsfor';
import Cardspro from '../inicio/Cardspro';


function Inicio() {
  return (
    <>
      <NavigationBar />
      <Portada />
      <Impacto />
      <Cardsexp />
      <Cardsfor />
      <Cardspro />
      <Carousel />
    </>
  )
}

export default Inicio
