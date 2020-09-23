import * as React from "react";
import Hero from "../assets/hero.jpg";
import "../styles/userprompt.scss";

import { Input, Button } from "antd";

type MyState = {
    email: string;
    password: string;
};
type MyProps = unknown;

class UserPrompt extends React.Component<MyProps, MyState> {
    private emailRef: HTMLInputElement;
    private passRef: HTMLInputElement;

    constructor(props: unknown) {
        super(props);
    }

    state = {
        email: "",
        password: "",
    };
    setDetails = (): void => {
        this.setState({
            //@ts-expect-error ***Value is defined
            email: this.emailRef.state.value,
            //@ts-expect-error ***Value is defined
            password: this.passRef.state.value,
        });
        console.log(this.state);
    };

    public render(): JSX.Element {
        return (
            <div className="checking">
                <div className="hero-image">
                    <img src={Hero} alt="hero-img" width="100%" height="100%" />
                </div>
                <div className="prompts">
                    <p>YOKOSO to KONOHA</p>
                    <div className="input-fields">
                        <Input
                            placeholder="Email"
                            size="large"
                            ref={(r: HTMLInputElement) => (this.emailRef = r)}
                            style={{ width: "20em", marginTop: "2em" }}
                        />
                        <Input.Password
                            placeholder="Password"
                            size="large"
                            ref={(r: HTMLInputElement) => (this.passRef = r)}
                            style={{ width: "20em", marginTop: "2em" }}
                        />
                        <Button
                            type="primary"
                            style={{ width: "10em", marginTop: "2em" }}
                            shape="round"
                            size="large"
                            onClick={() => this.setDetails()}
                            danger
                        >
                            Login{" "}
                        </Button>
                        <Button
                            type="secondary"
                            style={{
                                width: "10em",
                                color: "rgb(73,86,203,0.8)",
                                marginTop: "2em",
                            }}
                            shape="round"
                            size="large"
                        >
                            Sign Up{" "}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPrompt;
