import StoreModule from '../module';

class Language extends StoreModule {
  codes = ['ru', 'en'];

  initState() {
    return {
      code: this.codes[0],
      translations: {}
    }
  }

  switch(code){
    if (!this.codes.includes(code)) {
      return;
    }
    this.setState({code}, `Установлен язык ${code}`);
  }
}

export default Language;

