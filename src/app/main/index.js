import {memo, useCallback, useEffect} from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import NavBlock from '../nav-block';
import LangSwitch from '../../components/lang-switch';
import useTranslate from '../../hooks/useTranslate';

function Main() {

  const store = useStore();
  const _ = useTranslate();

  useEffect(() => {
    store.actions.catalog.load();
    store.actions.product.clear();
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    activeLang: state.language.code,
    langsList: state.language.codes
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Переключение языка
    switchLanguage: useCallback(code => store.actions.language.switch(code), [store]),
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  };

  return (
    <PageLayout>
      <Head title={_('mainTitle')}>
        <LangSwitch onClick={callbacks.switchLanguage} defaulCode={select.activeLang} codesArr={select.langsList}/>
      </Head>
      <NavBlock/>
      <List list={select.list} renderItem={renders.item}/>
    </PageLayout>

  );
}

export default memo(Main);
