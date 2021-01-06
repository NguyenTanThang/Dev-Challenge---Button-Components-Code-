import React, { Component } from 'react';
import Button from "../components/Button";

class HomePage extends Component {
    render() {
        return (
            <main>
                <div className="container">

                    <h2>Buttons</h2>

                    <div className="row">
                    
                        <div className="button-group">
                            <h5>{"<Button />"}</h5>
                            <Button text="Default"/>
                        </div>

                        <div className="button-group">
                            <h5 className="button-group--grey-header">{"&:hover, &:focus"}</h5>
                            <Button text="Default" active/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="button-group">
                            <h5>{"<Button variant=”outline” />"}</h5>
                            <Button variant="outline" text="Default"/>
                        </div>

                        <div className="button-group">
                            <h5>{"&:hover, &:focus"}</h5>
                            <Button variant="outline" text="Default" active/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="button-group">
                            <h5>{"<Button variant=”text” />"}</h5>
                            <Button variant="text" text="Default" disableShadow/>
                        </div>

                        <div className="button-group">
                            <h5>{"&:hover, &:focus"}</h5>
                            <Button variant="text" text="Default" active disableShadow/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="button-group">
                            <h5>{"<Button disableShadow />"}</h5>
                            <Button color="primary" text="Default" disableShadow/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="button-group">
                            <h5>{"<Button disabled />"}</h5>
                            <Button text="Disabled" disabled/>
                        </div>

                        <div className="button-group">
                            <h5>{"<Button variant=”text” disabled />"}</h5>
                            <Button variant="text" text="Disabled" disabled disableShadow/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="button-group">
                            <h5>{"<Button startIcon=”local_grocery_store” />"}</h5>
                            <Button color="primary" text="Default" startIcon="local_grocery_store"/>
                        </div>

                        <div className="button-group">
                            <h5>{"<Button endIcon=”local_grocery_store” />"}</h5>
                            <Button color="primary" text="Default" endIcon="local_grocery_store"/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="button-group">
                            <h5>{"<Button size=”sm” />"}</h5>
                            <Button color="primary" text="Default" size="sm"/>
                        </div>

                        <div className="button-group">
                            <h5>{"<Button size=”md” />"}</h5>
                            <Button color="primary" text="Default" size="md"/>
                        </div>

                        <div className="button-group">
                            <h5>{"<Button size=”lg” />"}</h5>
                            <Button color="primary" text="Default" size="lg"/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="button-group">
                            <h5>{"<Button color=”default” />"}</h5>
                            <Button color="default" text="Default"/>
                        </div>

                        <div className="button-group">
                            <h5>{"<Button color=”primary” />"}</h5>
                            <Button color="primary" text="Primary"/>
                        </div>

                        <div className="button-group">
                            <h5>{"<Button color=”secondary” />"}</h5>
                            <Button color="secondary" text="Secondary"/>
                        </div>

                        <div className="button-group">
                            <h5>{"<Button color=”danger” />"}</h5>
                            <Button color="danger" text="Danger"/>
                        </div>

                        <div className="clear-row"></div>
                        
                        <div className="button-group">
                            <h5 className="button-group--grey-header">{"&:hover, &:focus"}</h5>
                            <Button text="Default" active/>
                        </div>

                        <div className="button-group">
                            <h5 className="button-group--grey-header">{"&:hover, &:focus"}</h5>
                            <Button color="primary" text="Primary" active/>
                        </div>

                        <div className="button-group">
                            <h5 className="button-group--grey-header">{"&:hover, &:focus"}</h5>
                            <Button color="secondary" text="Secondary" active/>
                        </div>

                        <div className="button-group">
                            <h5 className="button-group--grey-header">{"&:hover, &:focus"}</h5>
                            <Button color="danger" text="Danger" active/>
                        </div>

                    </div>

                </div>
            </main>
        )
    }
}

export default HomePage;
