import React from 'react';
import { MDBContainer } from "mdbreact";

export const About = () => {
    return (
        <div style={{backgroundColor:'#DFA1B6'}}>
            <table style={{ backgroundColor: '#E6E6FA', border: '1px solid black', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.15', width: '500px',height:'100%', padding: '20px', paddingLeft: '50px', paddingRight: '50px', border: '2px dotted #2c2024', boxShadow: '4px 4px 10px rgba(0,0,0,0.4)', borderCollapse:'10px' }}>
                <h2><b> GIỚI THIỆU </b></h2>
                <p style={{ fontStyle: 'italic', textAlign:'left'}}><b>Họ và Tên: </b>Đặng Thị Bích Truyền</p>
                <p style={{ fontStyle: 'italic',textAlign:'left' }}><b>MSSV:</b> 4501104264</p>
                <p style={{ fontStyle: 'italic',textAlign:'left' }}><b>Email:</b> 4501104264@student.hcmue.edu.vn</p>
                <p style={{ fontStyle: 'italic',textAlign:'left' }}><b>Lớp HP:</b> Công Nghệ Web-COMP103101</p>
                <p style={{ fontStyle: 'italic',textAlign:'left' }}><b>Năm Học:</b> 2022-2023</p>
            </table>
        </div>
    )
} 