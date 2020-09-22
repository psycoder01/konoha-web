import * as React from "react";
import Hero from "../assets/hero.jpg";
import "../styles/userprompt.scss";

type MyState = {
    email: string;
    password: string;
};
type MyProps = unknown;

class UserPrompt extends React.Component<MyProps, MyState> {
    state: MyState = {
        email: "",
        password: "",
    };
    public render(): JSX.Element {
        return (
            <div className="checking">
                <div className="hero-image">
                    <img src={Hero} alt="hero-img" width="100%" height="100%" />
                </div>
                <div className="prompts">
                    <p>Ohio KONOHA</p>
                </div>
            </div>
        );
    }
}

export default UserPrompt;
