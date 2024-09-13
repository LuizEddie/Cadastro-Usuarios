import React, { Component } from 'react';
import Main from '../template/Main';
import axios from 'axios';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users';

const INITIAL_STATE = {
    user: { name: '', email: '' },
    list: []
}

class UserCrud extends Component {

    state = { ...INITIAL_STATE }

    componentDidMount(){
        axios(baseUrl).then((resp)=>{
            this.setState({ list: resp.data });
        })
    }

    clear() {
        this.setState({ user: INITIAL_STATE.user })
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user).then((resp) => {
            const list = this.getUpdatedList(resp.data);
            this.setState({ user: INITIAL_STATE.user, list });
        })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id);
        if(add) list.unshift(user);
        return list;
    }

    updateField(e) {
        const user = { ...this.state.user, [e.target.name]: e.target.value }
        this.setState({ user });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" name="name" id="name" className="form-control" value={this.state.user.name} onChange={(e) => this.updateField(e)} placeholder='Digite o nome...' required/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" value={this.state.user.email} onChange={(e) => this.updateField(e)} placeholder='Digite o e-mail...' required/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={(e) => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary ml-2" onClick={(e) => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        );
    }

    load(user){
        this.setState({ user });
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then((resp)=>{
            const list = this.getUpdatedList(user, false);
            this.setState({ list });
        });
    }

    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map((user)=>{
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={()=>this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={()=>this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}

export default UserCrud;