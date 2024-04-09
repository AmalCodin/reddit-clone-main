import CSSModules from "react-css-modules";
import Card from "../../../components/Card/Card";
import styles from "./PremiumCard.module.css";
import redditShield from "../../../assets/reddit-shield.png";

import React, {useState} from "react";

const PremiumCard: React.FC = () => {
  return (
    <Card>
      <div styleName="premium-card">
        <div styleName="premium-card__content">
          <img
            styleName="premium-card__icon"
            src={redditShield}
            alt="reddit premium shield icon"
          />
          <div styleName="premium-card__text">
            <h3 styleName="premium-card__title">Vit Helpline</h3>
            <p styleName="premium-card__description">
              Any problems, issues you are facing in VIT 
            </p>
          </div>
        </div>
      </div>
      <div styleName="premium-card__button-container">
      <button styleName="premium-card__button" onClick={() => window.open("https://vhelp.vit.ac.in/vitcc-help-center/", "_blank")}>
  Get Help
</button>
<br />
<br />
<button styleName="premium-card__button" onClick={() => window.open("https://vhelp.vit.ac.in/vitcc-help-center/", "_blank")}>
  VIT Counsellor Info
</button>

      </div>
    </Card>
  );
};

export default CSSModules(PremiumCard, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
