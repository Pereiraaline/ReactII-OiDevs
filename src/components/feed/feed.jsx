import { useEffect, useState } from 'react';
import { fetcher } from '../../services';
import {Text} from '../../ui/text/index';
import * as Styles from './styles';

export const Feed = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const makeRequest = async() => {
            setIsLoading(true);
            try{
                const response = await fetcher("photos");
                setItems(response);
            }catch (error){
                setHasError(true);
            } finally{
                setIsLoading(false);
            }
        };

        makeRequest();

    },[]);
   return (
     <Styles.Wrapper>
       {isLoading && <Text>Carregando ...</Text>}
       {hasError && <Text>Epa, deu ruim</Text>}
       {items.map((item) => (
         <Styles.Item key={item.id}>
           <Styles.Image src={item.urls.small} />
         </Styles.Item>
       ))}
     </Styles.Wrapper>
   );
};