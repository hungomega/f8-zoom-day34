import Button from "../../components/Button";
import styles from "./Buttons.module.scss";
function Buttons() {
    return (
        <div className={styles.buttons}>
            <h1>Buttons</h1>

            <h2>1.button basic</h2>
            <Button>Click me</Button>
            <h2>2.Primary Button</h2>
            <Button primary>Primary Button</Button>
            <h2>3.Link Button</h2>
            <Button href="https://google.com" target="_blank">
                Go to Google
            </Button>
            <h2>4.Button với Size</h2>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <h2>5.Button với Variants</h2>
            <Button bordered>Bordered</Button>
            <Button rounded>Rounded</Button>
            <Button primary rounded>
                Primary Rounded
            </Button>

            <h2>6.Button với onclick</h2>
            <Button onClick={() => alert("Clicked!")}>Click Alert</Button>
            <h2>7.Disable button</h2>
            <Button disabled onClick={() => alert("Should not show")}>
                Disabled Button
            </Button>
            <h2>8.Loading button</h2>
            <Button loading onClick={() => console.log("Should not log")}>
                Loading Button
            </Button>

            <h2>9.Custom Classname</h2>
            <Button className="my-custom-class" primary>
                Custom Styled
            </Button>
            <h2>10. Button với Icon</h2>
            <Button primary>
                <span>📧</span> Send Email
            </Button>
        </div>
    );
}

export default Buttons;
