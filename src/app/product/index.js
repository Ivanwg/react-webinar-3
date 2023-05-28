import {memo, useCallback, useEffect} from 'react';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import NavBlock from '../nav-block';
import Detail from '../../components/detail';
import { useLocation } from 'react-router-dom';
import { locationParam } from '../../utils';

function Product() {
  const location = useLocation();
  const pageId = locationParam(location);
  const store = useStore();
  
  useEffect(() => {
    // store.actions.modals.close();
    store.actions.product.load(pageId);
  }, [pageId]);

  const select = useSelector(state => ({
    product: state.product.product
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store])
  }

  return (
    <PageLayout>
      <Head title={select.product.title ? select.product.title : ''}/>
      <NavBlock/>
      {Object.keys(select.product).length ? <Detail desc={select.product.description} price={select.product.price} madeInCountry={select.product.madeIn.title}
                madeInCode={select.product.madeIn.code} category={select.product.category.title} year={select.product.edition}
                    onAdd={() => callbacks.addToBasket(pageId)}/> : ''}
    </PageLayout>

  );
}

export default memo(Product);
