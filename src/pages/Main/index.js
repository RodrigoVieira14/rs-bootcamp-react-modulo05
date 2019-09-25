import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Container from '../../components/Container';
import { Form, Input,  SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: false,
    msgError: ''
  };

  // carregar os dados do localStorage
  componentDidMount(){
    const repositories = localStorage.getItem('repositories');

    if(repositories){
      this.setState({repositories: JSON.parse(repositories)})
    }
  }

  //Salvar os dados do localStorage
  componentDidUpdate(_, prevStage){
    const { repositories } = this.state;

    if(prevStage.repositories !== repositories){
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    try{

      

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      if(repositories.find( repo => repo.name === data.name)){
          throw new Error('Repositório duplicado');

      }
        
        
      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        error: false
      });
      

    }catch(e){
      console.log(e);      
      this.setState({error: true, loading: false, newRepo: '', msgError: `Algo aconteceu de errado com o repositório "${newRepo}". Tente novamente!`});
    }


    
  };


  render() {
    const { newRepo, repositories, loading, error, msgError } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <Input
            placeholder="Adcionara repositorio"
            value={newRepo}
            onChange={this.handleInputChange}
            error={error}
          />
          <SubmitButton loading={loading}>
            { loading ? (
              <FaSpinner color="#fff" size={14} /> 
              ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>

        </Form>
        { error && <span className="alert-error">{msgError}</span>}

        <List>{ repositories && repositories.map(repo => (
          <li key={repo.name}>
            <span>{repo.name}</span>
            <Link to={`/repository/${encodeURIComponent(repo.name)}`}>Detalhes</Link>
          </li>
        ))}</List>
      </Container>
    );
  }
}
