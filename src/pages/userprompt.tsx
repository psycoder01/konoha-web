import * as React from "react";
import Hero from "../assets/hero.jpg";
import "../styles/userprompt.scss";

//Components
import { Input } from "baseui/input";
import { Button, SHAPE } from "baseui/button";

type MyState = {
    email: string;
    password: string;
};
type MyProps = unknown;

class UserPrompt extends React.Component<MyProps, MyState> {
    private emailRef = React.createRef<HTMLInputElement>();
    private passRef = React.createRef<HTMLInputElement>();

    constructor(props: unknown) {
        super(props);
    }

    state = {
        email: "",
        password: "",
    };
    setDetails = (): void => {
        this.setState(
            {
                email: this.emailRef.current.value,
                password: this.passRef.current.value,
            },
            () => {
                console.log(this.state);
            }
        );
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
                        <div style={{ margin: "1em 0", width: "100%" }}>
                            <Input
                                startEnhancer="@"
                                placeholder="Email"
                                inputRef={this.emailRef}
                                size="large"
                            />
                        </div>
                        <div style={{ margin: "1em 0", width: "100%" }}>
                            <Input
                                startEnhancer="?"
                                type="password"
                                placeholder="Password"
                                inputRef={this.passRef}
                                size="large"
                            />
                        </div>
                        <div
                            style={{
                                margin: "1em 0",
                                width: "20em",
                                height: "5em",
                            }}
                        >
                            <Button
                                size="large"
                                shape={SHAPE.pill}
                                onClick={() => this.setDetails()}
                                overrides={{
                                    BaseButton: {
                                        style: () => {
                                            return {
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: "#EFB7B7",
                                            };
                                        },
                                    },
                                }}
                            >
                                Log In{" "}
                            </Button>
                        </div>
                        <Button
                            size="large"
                            shape={SHAPE.pill}
                            overrides={{
                                BaseButton: {
                                    style: () => {
                                        return {
                                            backgroundColor:
                                                "rgba(73, 86, 203, 0.5)",
                                        };
                                    },
                                },
                            }}
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
