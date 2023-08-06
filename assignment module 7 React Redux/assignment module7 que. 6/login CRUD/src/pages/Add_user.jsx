import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Add_user() {
    const  redirect = useNavigate();

    const [formvalue,setFormvalue] = useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        status:""
    });

    const onchange=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
    }

    function validate(){
        var result = true;
        if(formvalue.name==""||formvalue.name==null){
            result=false;
            toast.error("Name field required");
        }
        if(formvalue.email==""||formvalue.email==null){
            result=false;
            toast.error("Email field required");
        }
        if(formvalue.password==""||formvalue.password==null){
            result=false;
            toast.error("Password field required");
        }
        if(formvalue.mobile==""||formvalue.mobile==null){
            result=false;
            toast.error("Mobile field required");
        }
        return result;
    }

    const onsubmit=async(e)=>{
        e.preventDefault();
        if(validate()){
            const res =await axios.post('http://localhost:3000/user',formvalue);
            if(res.status ==201){
                toast.success("Add user successfully");
                setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
                redirect('/dashboard');
            }
        }
    }


  return (
    <div>
        <aside className="main-sidebar">
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Purvang Suhagiya</p>
                            <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>
                    {/* search form */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" /></button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-dashboard" /> <NavLink to="/dashboard"> Dashboard</NavLink> 
                            </a>                           
                        </li>
                        
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-table" /><NavLink to="/adduser"> Add user</NavLink>
                                <i className="fa fa-angle-left pull-right" />
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-table" /><NavLink to="/user"> Manage user</NavLink>
                                <i className="fa fa-angle-left pull-right" />
                            </a>
                        </li>
                        
                    </ul>
                </section>
               
            </aside>
        <div className="content-wrapper">
            <div className="row">
                <div className="col-md-12 col-sm-12 sol-xs-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">Add More Packages for Tour</div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" id="name" className='form-control' value={formvalue.name} onChange={onchange}/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" id="email" className='form-control' value={formvalue.email} onChange={onchange}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" id="password" className='form-control' value={formvalue.password} onChange={onchange}/>
                                </div>
                                <div className="form-group">
                                    <label>mobile</label>
                                    <input type="number" name="mobile" id="mobile" className='form-control' value={formvalue.mobile} onChange={onchange}/>

                                   
                                </div>
                                <div className="text-center">
                                    <button type="submit" className='btn btn-info' onClick={onsubmit} style={{margin:"20px"}}>Submit</button>
                                </div>
                                <div className="text-center">
                                    <button type="submit" onClick={()=>{redirect('/dashboard')}} className='btn btn-danger'>Main Menu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add_user