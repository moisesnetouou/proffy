import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export function TeacherItem(){
  return(
    <article className="teacher-item">
          <header>
            <img src="https://github.com/moisesnetouou.png" alt="Moisés Neto" />
            <div>
              <strong>Moisés Neto</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}