import './MainScreen.css';
import React                  from 'react'
// import Routes from '../../layouts/routes'
import Anotacoes from '../Anotacoes'
import Link from '@material-ui/core/Link'

class MainScreen extends React.Component {
  
  render(){
    return(
      <div className='MainScreen'>
        <div className='Title'>
          Torpe
        </div>
        <div className = 'SubTitle'>
          Sistema Manual de Tradução e Classificação de Termos para Analise de Sentimentos
        </div>
        <div className='MainView'>
          <Anotacoes />
        </div>
        <div className='Status'>          
          <i>
            desenvolvido por: Maicon de Menezes | ver: <b>0.1b</b> |  
            <Link href = 'mailto: mdmoliveira@inf.ufpel.edu.br'>
                mdmoliveira@inf.ufpel.edu.br  
            </Link>
            | 
            <b>
              maio de 2020
            </b>  
          </i>
        </div>
      </div>
    );
  }
}
export default MainScreen