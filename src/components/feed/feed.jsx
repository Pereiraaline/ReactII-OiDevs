import { useContext, useEffect, useState } from 'react';
import {InstaContext} from '../../App';
import { fetcher } from '../../services';
import {Text} from '../../ui/text/index';
import * as Styles from './styles';

export const Feed = () => {
    const state = useContext(InstaContext);
    
    //const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const makeRequest = async() => {
            setIsLoading(true);
            try{
                const response = await fetcher("photos");
                state.meuDispatch({
                  type: "add_photos_user",
                  payload: response,
                });
            }catch (error){
                setHasError(true);
            } finally{
                setIsLoading(false);
            }
        };

        makeRequest();

    },[]);

    const handleImageClick = (imageId) => {
      state.meuDispatch({ type: "add_highligh_image", payload: imageId });
      state.meuDispatch({ type: "change_current_page", payload: "fullscreen" });
    };

   return (
     <Styles.Wrapper>
       {isLoading && <Text>Carregando ...</Text>}
       {hasError && <Text>Epa, deu ruim</Text>}
       {state.meuState.user.photos.map((item) => (
         <Styles.Item key={item.id} onClick={() => handleImageClick(item?.id)}>
           <Styles.Image src={item.urls.small} />
         </Styles.Item>
       ))}
     </Styles.Wrapper>
   );
};