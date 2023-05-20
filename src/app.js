import React, {useCallback} from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Cart from './components/cart';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const chosenItems = store.getChosen();

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onChooseItem: useCallback((code) => {
      store.chooseItem(code);
    }, [store])
  }

  return (
    <PageLayout>
      <Head>
        <h1>Магазин</h1>
      </Head>
      <Controls onAdd={callbacks.onAddItem}>
        <Cart chosenObject={chosenItems}/>
      </Controls>
      <List list={list}
            onDeleteItem={callbacks.onDeleteItem}
            onChooseItem={callbacks.onChooseItem}/>
    </PageLayout>
  );
}

export default App;
