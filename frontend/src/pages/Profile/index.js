import React,{useEffect, useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Profile(){
  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')
  const [incidents, setIncidents] = useState([])
  const history = useHistory()
  
  async function handleIncident(){
    try {
      await api.get('profile', {
        headers: {Authorization: ongId,}
      }).then(response => {
        setIncidents(response.data);
      })
    } catch (error) {
      alert('Falha ao carregar incidentes')
    }
  }
  async function handleIncidentDelete(id){
    try {
      await api.delete(`incidents/${id}`,{
        headers: {Authorization: ongId,}
      })
      handleIncident()
      //setIncitents(incidents.filter(incident => incident.id !== id ))
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }

  useEffect( ()=> {
     api.get('profile', {
      headers: {Authorization: ongId,}
    }).then(response => {
      setIncidents(response.data);
    })
  },[ongId] );

  return(
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero"/>
        <span>Bem vinda, {ongName} </span>
        <Link className= "button" to= "/incident/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout}>
          <FiPower size= {18} color= "#e04046" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASOS:</strong>
            <p>{incident.title}</p>
    
            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>
    
            <strong>VALOR:</strong>
            <p>{
            Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)
            }</p>
    
            <button onClick={() => handleIncidentDelete(incident.id)} type= "button" >
            <FiTrash2 size= {20} color= "#A8A8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}