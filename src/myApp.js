import React, {Component} from 'react';
import Image from './Image';
import Columns from './Columns'
import 'bulma/css/bulma.css'
class MyApp extends Component{
    render(){
        return(
            <div>
                <section className = "sections">
                    <h1>Hello World</h1>
                    <Columns class="columns">
                        <Columns class="column">
                        <img src={require('./img/iphoneX.png')} alt="IphoneX"/>
                        </Columns>
                        <Columns class="column">
                        <img src={require('./img/VivoV11.jpeg')} alt="VivoV11"/>
                        </Columns>
                        <Columns class="column">
                        <img src={require('./img/oppoF7.png')} alt="oppoF7"/>
                        </Columns>
                    </Columns>
                </section>
            </div>
        );
    }
}
export default MyApp;