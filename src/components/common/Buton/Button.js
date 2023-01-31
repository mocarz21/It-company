import styles from "./Button.scss"

const Button = ({lv, id, action}) =>{

    if (!lv) {
        return (
          <div>
            <button className="buttonSubmit" type="submit">Wyślij</button>
          </div>
        );
      } else {
        return (
          <button className="box-lvlProgram" onClick={action}>
            <div className={"lvl-" + id}>
              <h2>{lv}</h2>
            </div>
          </button>
        );
      }




}

export default Button;
