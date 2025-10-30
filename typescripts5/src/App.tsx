import React from 'react';
import logo from './logo.svg';
import './App.css';
  interface sinhVien {
    ten: string;
    tuoi: number;
    diaChi: string; // dấu ? là thuộc tính không bắt buộc
    soThich?: string[];
  }
function App() {
  const tinhTongHaiSo = (a: number, b: number): number  => { // :number là kiểu dữ liệu trả về
    return a + b; // neu ham console.log() thi k can :number dung void  
  };
  tinhTongHaiSo(1, 2);
  let count = 0;
  count = 10;
  const mangA: number[] = [1, 2, 3, 4, 5];
  const mangB: string[] = ['a', 'b', 'c', 'd', 'e'];
  const tuple: [number, string] = [1, 'a'];
  enum color {
    red = 'red',
    green = 'green',
    blue = 'blue'
  }
  let mauSac: color = color.red;

  if (mauSac === color.red) {
    console.log('mau do');
  }
  const sinhVien: sinhVien = {
    ten: 'Nguyen Van A',
    tuoi: 20,
    diaChi: 'Ha Noi',

  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )   
  ;
}

export default App;
