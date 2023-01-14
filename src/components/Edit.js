import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desg,setDesg]=useState('')
  const [salary,setSalary]=useState(0)

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setUname(localStorage.getItem('uname'))
    setAge(localStorage.getItem('age'))
    setDesg(localStorage.getItem('desg'))
    setSalary(JSON.parse(localStorage.getItem('salary')))
  },[])
  console.log(uname);
  console.log(id);
  console.log(salary);
  console.log(age);
  console.log(desg);

  var index=Employee.map(item=>item.id).indexOf(id)
  console.log(index);

  let history=useNavigate()



  const handleUpdate=(e)=>{
    e.preventDefault();
    console.log(e);
  let  emp=Employee[index]
    emp.uname=uname;
    emp.age=age;
    emp.desg=desg;
    emp.salary=salary;
    console.log(emp);
    history('/')
  }








  return (
    <>
      <h1 className='mt-5 text-center text-info'>Employee Management</h1>
      <p className='text-center ps-5 pe-5 ms-5 me-5'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These
        tools help monitor, assess and control employees' working hours and efficiently utilise human resources</p>

      <Row>
        <Col>
        <img className='ms-5 ps-5 w-75 h-100' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADLCAMAAACbI8UEAAAA/FBMVEX39/cYnLv///96EhT9+vkAmLlzAACcyti5uLi3tbW+vb12AACysbBwAAAAlbe2jY7FxMXm29sOocF4BQmrqqrKsLF8CAeOSUlfSliXVVbNzc17DxCmd3hxICWGKy3U09OXXF2mcXLAnp7q8fN9AAChoaK92+Tl7/Kx1uFMrMVgs8p5vdDR5euKxNXa2dk0o7/cy8vSvLzr4uKZmZm42OLJ4ejr8/Rst82Tx9eoxM17oKqMqLCrvcNAoLl0p7assLFho7Y8e5NQZ3xYV2mxnKBvLDSStcF/HB6MP0BbUWC3xMhsorEzhJ5+s8OHNTbDpaZqN0GQoKVSnLC4kpJsuN72AAAKx0lEQVR4nO2de3vaOBbGbUeCNsROAqQtkA1JCBBuMSHlkkwz08tsk+1skm37/b/LSvIFG2wjS/gix+8f88zTAI9/HOno1eUIScqVK1euXLly5cqVK9eKANKshTUj/5/088QjBNq9HPV0GWpIUNbnxan0CuCBNB3IGoRQtgXRV9ArdrMND1oLhC17CGq9TnbZQXfgjW2y65fZZAfSCPpzE2l6J4PooCNv4Cbs/VbG2IE00DZz4zYPsxV20NUpAm6GfZQhdDDc1MPdLT7p592aQIeupdstvpf0E29JYcEzgw6GYcERej8Lfb0boosv0QfiowP6rO6Udik6OhgwgaOod8VGB9PwndyULja5xMqNgl4UGR0sGNs6QW8l/fgcmnGAC53fwYiHXNa6SQOwiwtchsLOXUCRj1yGSROwCuh84DIU1c4wGPYVckHtO9eQZkibJQ3BJNDjBZfhRyGDzjWYm+RCZncOy76UkOade0wjQRexozPPT50S0saB3jZiLuLqO7ePIeQiehmwhZCLOUkHW0jtMly8WnIRB/RXTP56+3l5G+RC5nb+CYuo4/lWPNwwaQwGvWLfHnrz2ENCztWkFj+5oEvuWzDuQqZ27n0GLCEnqVtZlOkJGXKEzgsupIPD4l52Fnc3tcvX3OFc0JBz2zghDZwpvqALurdExBV0QYc0Uxz7LIL6N0vgkr29J/3snAJ9xqhrU6FDjjRjAxdyAc4tMGQ69yqqb3WKpatDPemn3opAMTx6Rup4wqJDWfDTvkuFa/BQz0jEscCUvoQnQwU8WKBFu5uuiTon9xVYBNSkOlr6MGvguFqvt6m3Q1jMaE1upxcUdwhHGUptbgEw7fuwQ01eZJYbC4BWsQehO9NDhD3PcN29JQTfGfXwFQvQ+I8+Lw49L5oQ+btAz+719ORqke6w0+lMh13J724RsCgOxYRHwb3sBxhREHyfCvK8UNMX4t28AaSPKJtB5oo70+xDrXfp2W5SKgC6I/sSESZvgoyPnQDlxUwUdjB0Dl4aw4kP4LqcAWpijPRubowe9jgfkFZdPnJ3qW/zoDVfMyshbwwBU49rSKCc8iVJUPSaj0KZvsUDaeTt77V5isOOZiU+xlzr0+V4ADq+BeuQLVnGIXAZsAABR5szNMA5wvcT0jt5B8G35ZC5WNCTg7XcuI6exi0nMNu47AK1ue9VcNjxBU5izY9I31oVaFFdKKHJg856osKX5fXplupStwcBujQXYpFHh9rt1QSfAwHmdGzS3NU16iXKlJVsghYtOJbePDC1++btXrXavguzA5WuQySzUHenwNs6pkbYb/f2EHk1xHtlBk8YocJWaN2b5AS9Wg0VcpltJhCNQh8KgZ/qTvJwb8bvT8lBEobd0nsn+R+h95nTkuAZTkDBT0vyPYaTwekwc0xlmPdL8vAhl9PR3tkOAaGgW+T3DG9PxajOePDr3iJnCnkaThCxHvaDnwzyt0whl1NwApz5gGfvgJAzhjz5QR3MWZ8cGjH/xfj2xKt7OM70GuR/Mr8/2Z7OcaSXt7UnnN5b7M/9ZJD/xfoByY7pHHWIVm5ncXDWRyQ4Z+MoSYPWeP456FXlYCmJgXPUZekbnUy5rH35+u1DgL79PZaUROjZhzRZ/myR/+X9GWX49d8XSO8CdFFSS7UjKQl2joqF77Zv9+SWv11cNHYoVFEfXmJHBx0O8h9BM5byl4cLGmyihvo4iZmdqz5nOUv9c+1Tyl/teDcqAbJeVFGvY0Zn50Y+xn9+Xv6PEfBGSVUf3td89dhQ1ZIZ9qM40VmuJ7eEfIxNvuplyt8M8ELpeKwEC4zPCgZ7rFHnKTsNWI0qf7kwwrgPNnATTU5V8vLCJEZyjstDoGPVedXLvMPdt1LaFG9bRwS98hhj0Dnym+5Ye91zLbeXP1yQLj6hBVeUMUFXYxvcuArrPztXnX86yTXS1tVDenAz6o2dmMC5bk2B3/12Goz0VvgdBlxRTnGaK8SV35mrD2XiY5zkTi/zgHp54yGA8vDdianGkfVvExz0Ui2u5s5zdYh7X+2f5R/+S0L+EkSuNkypNrlyRoIeEzjPdTE9N/nSyyD3hnu5FEhu2dbCkpwkOXUcCzhPgoNPbvK2/Zfyh3dogHo223CzXidb7HiPvdpu39xUJR9yqWA0lVjIeRLcrZu8anec8v8qqMOeEZpWE5EbmdB4FWLf8yFXnlF6KO3HQ84xXYH1FXLby5T/ZRD4kbf9yN/jb+w4HnKeBNdcIb/zIpeaTQvcbO7tm3oayDkcXH+V3PYyTnJFuiJqktjjdxw0/TJcnOQcWwzIx6yQ217GRR4it8dIzjVF/bFGbnkZKvKCKTUZ8kuO1t5cI7e8DAW59HJkyWHuYyTnmJz31sn/oCf3Vozk7IMafFojb1teRgRy9mUJeOtBfi8OOce+Ut2D/Bc1+aR2aqp2nQQ5z7qrYc3c5HfU5IdqyVQyuZ19+xj7mHXynyHIkx3P2Y0M/O5F3vYgbzXtbmG+7A1InJxjjgp/eJLfr5FLHjOWN3TkYBjZvSzgI/ug1vQk/2eNnH2uBopaZCfBOSzc/ZUn+Z13zMnpf4Mcz9UOaMjJqUwtovP/7BYOPnmTt9fIyVytabUQ9PLdN3WqDGecR42o1ofdwsFbH/L7NXK23A66HYVsb0fzc+JgzgiOfYw3+S9q8g1zNV37qJCr2SI5Ksix2H7lQ35HST7Zt+XYeluS61DWikpXhjCSWk5m2w77fuQ/Kcm9ZZEbIdFGSkuP5lwskCGbtKerpodtb9/c3OA/85JbZ5a0QeAdFjzkRUYthhOkK0tNojoR+TsPufqi2AXcWmS/xgeYFfiRysnmfn56Zsndz9V9xb6CL5q8HqUoyP3maoUzxa4rSVcZI5WoyD3H80JNsecSaSnqCiMXecuVDHEuPPAlf3xcrgYLeXOok1xam6S2b3b9yGtS13IYUBbxR1yc5KHmasBxl7AQd8+sai3mdcqYK3YxdDTWLXKt9nPXNLXa3vXt53adpCYmOHNut4+bR+dgIhbjeL60bmL+aI9ERT45W/Nw9r1iabqNIKQoyD1kmVaRf+CAhXw4U4wfNEtDfTKzWMgX8owYV9hL+ul5RNPPf59bMvbP+1DuKkMopGddiiq3r6zDQexelK4+m8SzoxiNGMZzss+l4YtyHzJDbqy3W4t22Ml5rbdfQhlqcC4p12pWyCn3WAaaPJii7n/+WMgK+YRqrtbqDfGLT9VCJaaTA9Fo01xtfS+1Y/SMGM9MRCNXP5+4VyZQa9/zO+ucAfJngyBEbs8KOa5IKZ0Gk3utvZ7Ed8o7GinHiLxxEkQ+ses13y/PRknqTowlPFFIecHFCWqIYjVD1+Rt8VRzRCTSi8NvL+Fu3igl/fBcIilup0BVkrqU8X2dCdzYEfnvwo5dyUKtx4rwjR0Jk+840/ZmHeP3VJ6FDrkVdFxPTq1zoyL3OulH59ZJhYCcU0ecgCMTkPSDc8s0aep7qnrk6xPSRioPST/2FmSW0u+U1MeXYHgwPj9RyTUbDfUw6cfehhC6cWtIpaDaVtVLqlowX1gai9/WsZAlK+2EUOHhMBvgCH1SUyu03CX1OOnn3aaU62e1RHF9UqWk1jLS0m0p4+MT1V5h9pZaeNzPTEN3SJEm46MgXY8nyVySFoeCB/Okny5Xrly5cuXKlStXgvo/T9lp2vPC9RUAAAAASUVORK5CYII='/>
        </Col>
        <Col>
        <Form className='me-5 pe-5'>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text"  value={uname} onChange={(e)=>setUname(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text"  value={age} onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text"  value={desg} onChange={(e)=>setDesg(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text"  value={salary} onChange={(e)=>setSalary(e.target.value)} />
        
      </Form.Group>


      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit" className='border border-5 border-light mb-5 bg-success text-light'>
        Update
      </Button>
    </Form>
        </Col>
      </Row>
    </>
  )
}

export default Edit