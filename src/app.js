import React, {useCallback} from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Cart from './components/cart';
import Item from './components/item';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const chosenData = store.getChosen();

  const callbacks = {
    onCartRemoveItem: useCallback((code) => {
      store.removeChosenItem(code);
    }, [store]),

    onChooseItem: useCallback((code) => {
      store.chooseItem(code);
    }, [store]),
  }
  
  const listItem = useCallback(item => <Item item={item} onClick={callbacks.onChooseItem} actionName='Добавить'/>, []);

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls>
        <Cart chosenObject={chosenData.chosenItems} count={chosenData.count} price={chosenData.price} onRemove={callbacks.onCartRemoveItem}/>
      </Controls>
      <List list={list} childElem={listItem}/>
    </PageLayout>
  );
}

export default App;
