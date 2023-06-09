import React from "react";
import { Text, StyleSheet} from "react-native";

/*
1º Forma de se criar um componente
class Titulo extends React.Component {
    render(){
        return(
            <Text style={css.titulo}>Ola!</Text>
        );
    }

}

2º Forma de se criar um componente é em formato de arrow function
const Titulo = () => (
    <Text style = {css.titulo}>Ola!</Text>
)

*/

function Titulo(props){
    return(
        <Text style={css.titulo}>{props.titulo}</Text>
    );
}

const css = StyleSheet.create({
    titulo: {
        color: '#00B0FF',
        fontSize: 40
    }
});

export default Titulo;