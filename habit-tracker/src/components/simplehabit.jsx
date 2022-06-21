import React, { useRef, useState, useCallback, useEffect } from 'react';

const Simplehabit = props => {
  const [count, setCount] = useState(0);
  const spanRef = useRef(); // React.createRef();
  const handleIncrement = useCallback(() => {
    // 매번 함수가 재호출 되는 것을 방지
    setCount(count + 1);
  });

  // react hook lifecycle method
  useEffect(() => {
    console.log(`mounted & update: ${count}`);
  }, []);
  // useEffect의 두번째 인자에
  // [] 빈 배열을 넘겨주면, 컴포넌트가 처음 생성되었을 때만 실행
  // [state] state 값들을 넘겨주면 해당 값이 업데이트 되었을 때만 실행
  // 아무것도 넘기지 않으면 처음 생성되었을 때, state가 업데이트 되었을 때 모두 실행

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
    </li>
  );
};

export default Simplehabit;
