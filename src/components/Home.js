import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Employee from './Employee';
import { FaUserPlus,FaUserEdit,FaTrashAlt } from "react-icons/fa";
import {Link , useNavigate} from 'react-router-dom';



function Home() {
    const history=useNavigate();
    const handleDelete=(id)=>{
        alert('Deleted');
        let index=Employee.map(item=>item.id).indexOf(id);
        Employee.splice(index,1);
        console.log(Employee);
        history('/');
    }
    const handleEdit=(id,uname,age,desg,salary)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",uname);
        localStorage.setItem("age",age);
        localStorage.setItem("desisgnation",desg);
        localStorage.setItem("salary",JSON.stringify(salary));


    }



    return (
        <div>
            <h1 className='mt-5 text-center text-info'>Employee Management</h1>
            <p className='text-center ps-5 pe-5 ms-5 me-5'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These 
                tools help monitor, assess and control employees' working hours and efficiently utilise human resources</p>
            
            <Link to={'/add'}>
            <Button className='btn bg-success text-light border border-light border-2 fs-3 mb-5 ms-5 pe-5 ps-5'>Add 
            <FaUserPlus className='ms-2 fs-3'/></Button>
            </Link>
            <h4 className='text-center text-dark'>List Of Employees</h4>
            <Table className='mt-3 border border-light border-2 ps-5 pe-5' striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th className='ps-5'>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Employee && Employee.length > 0 ?
                            Employee.map((item) => (
                                <tr>
                                    <td>{item.uname}</td>
                                    <td>{item.age}</td>
                                    <td>{item.desg}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <Link to={'/edit'}>
                                        <Button className='bg-primary text-light me-2 border border-light border-2 ps-4 pe-4' 
                                        onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)}><FaUserEdit/></Button>
                                        </Link>
                                    <Button onClick={()=>handleDelete(item.id)} className='btn  bg-danger text-light border border-light border-2 ps-4 pe-4'><FaTrashAlt/></Button></td>



                                    
                                </tr>
                            )):'Error'
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Home