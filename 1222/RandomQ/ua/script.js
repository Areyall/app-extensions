import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
const root = ReactDOM.createRoot(document.getElementById('root'));

var quotes = [
  { quote: 'Світ ловив мене, та не спіймав', autor: 'Григорій Сковорода' },
  {
    quote:
      'Ніяка в світі сила нас не зламає, бо нас коріння наше в землі тримає',
    autor: 'Г. Дудка',
  },
  {
    quote:
      'Найпрекрасніша мати щаслива, найсолодші кохані вуста, найчистіша душа незрадлива, найскладніша людина проста',
    autor: 'В. Симоненко',
  },
  {
    quote: 'Знай, що в світі найтяжче – це серце носити студене!',
    autor: 'М.Рильський',
  },
  {
    quote:
      'Коли не зможу нічим любій вітчизні прислужитись, в усякому разі з усієї сили намагатимусь ніколи ні в чому не шкодити',
    autor: 'Г. Сковорода',
  },
  { quote: 'Зло нічого не дає, крім зла', autor: 'М. Луків' },
  {
    quote:
      'Не високо мудруй, але твердо держись, а хто правду лама, з тим ти сміло борись!',
    autor: 'Іван Франко',
  },
  {
    quote:
      'Гримить! Тайна дрож пронимає народи,- мабуть благодатная хвиля надходить',
    autor: 'Іван Франко',
  },
  {
    quote: 'Орлині крила маєм за плечима, самі ж кайданами прикуті до землі',
    autor: 'Леся Українка',
  },
  {
    quote:
      'Добридень же, новий годе, В торішній свитині. Що ти несеш в Україну В латаній торбині?',
    autor: 'Т. Шевченко',
  },
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
let startingQuote = randomQuote();
class RqmApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: startingQuote.quote,
      autor: startingQuote.autor,
    };
    this.quotesHandler = this.quotesHandler.bind(this);
  }

  quotesHandler() {
    let someQuote = randomQuote();
    return someQuote.autor == this.state.autor
      ? randomQuote()
      : this.setState({
          quote: someQuote.quote,
          autor: someQuote.autor,
        });
  }

  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left"> </i>
            <span id="text">{this.state.quote}</span>
          </div>
          <div className="quote-author">
            – <span id="author">{this.state.autor}</span>
          </div>
          <div className="buttons">
            <a
              className="button"
              id="tweet-quote"
              title="Quote to tweet"
              target="_top"
              href={`https://twitter.com/intent/tweet?hashtags=UAquotes&text=${encodeURIComponent(
                this.state.quote + '" ' + this.state.autor
              )}`}
            >
              <i className="fa fa-twitter"></i>
            </a>

            <button
              onClick={this.quotesHandler}
              className="button"
              id="new-quote"
            >
              Новий вислів
            </button>
          </div>
        </div>
      </div>
    );
  }
}

root.render(<RqmApp />);
