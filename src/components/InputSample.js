import React, { useState, useRef } from 'react'

function InputSample() {

  const [inputs, setInputs] = useState({
    name: '',
    nick: ''
  });
  const nameInput = useRef();

  const { name, nick } = inputs;

  console.log(window.scrollX);

  const onChange = (e) => {
    const { value, name } = e.target;  // 우선 e.target에서 name과 value를 추출 
    setInputs({
      ...inputs,  // 기존의 input 객체를 복사 
      [name]: value  // name 키를 가진 값을 value로 설정 
    });
  };

  const onReset = (e) => {
    setInputs({
      name: '',
      nick: ''
    });
    nameInput.current.focus()
  };

  return (
    <div>
      <input name="name" placeholder="이름" type="text" onChange={onChange} value={name} ref={nameInput}/>
      <input name="nick" placeholder="닉네임" type="text" onChange={onChange} value={nick}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {name}
          이름 : {nick}
        </b>
      </div>
    </div>
  )
}

export default InputSample
