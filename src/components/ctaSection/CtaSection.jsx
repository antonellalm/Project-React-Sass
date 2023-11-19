import "./CtaSection.scss";
import PhoneImg from "../../assets/cta-phone.png";
import Wrapper from "../wrapper/Wrapper";
export default function CtaSection() {
  return (
    <section className="cta">
      <Wrapper className="cta__container">
        <div className="cta__left">
          <img src={PhoneImg} alt="" />
        </div>
        <div className="cta__right">
          <h3>Take control of your finance</h3>
          <p>
            One clic apps & Integrations to help supecharge your teams workflow.
            Attended overcame repeated it is perceived Matianne in.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your Email"
              className="email"
            />
            <input type="submit" value="submit" className="button-primary" />
          </form>
        </div>
      </Wrapper>
    </section>
  );
}
